import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const formsFilePath = path.join(process.cwd(), 'src', 'json', 'allforms.json');

interface Form {
  id: string;
  title: string;
  type: string;
  subtitle: string;
  package?: string;
  status?: 'active' | 'locked';
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const formId = params.id;
    const body = await request.json();
    const { title, type, subtitle, package: formPackage } = body;

    const formsData = fs.readFileSync(formsFilePath, 'utf8');
    const forms = JSON.parse(formsData);

    const formIndex = forms.forms.findIndex((form: Form) => form.id === formId);
    
    if (formIndex === -1) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    forms.forms[formIndex] = {
      ...forms.forms[formIndex],
      title: title || forms.forms[formIndex].title,
      type: type || forms.forms[formIndex].type,
      subtitle: subtitle || forms.forms[formIndex].subtitle,
      package: formPackage !== undefined ? formPackage : forms.forms[formIndex].package
    };

    fs.writeFileSync(formsFilePath, JSON.stringify(forms, null, 2));

    return NextResponse.json(forms.forms[formIndex]);
  } catch (error) {
    console.error('Error updating form:', error);
    return NextResponse.json({ error: 'Failed to update form' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const formId = params.id;

    const formsData = fs.readFileSync(formsFilePath, 'utf8');
    const forms = JSON.parse(formsData);

    const formIndex = forms.forms.findIndex((form: Form) => form.id === formId);
    
    if (formIndex === -1) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    const deletedForm = forms.forms.splice(formIndex, 1)[0];

    fs.writeFileSync(formsFilePath, JSON.stringify(forms, null, 2));

    return NextResponse.json({ message: 'Form deleted successfully', form: deletedForm });
  } catch (error) {
    console.error('Error deleting form:', error);
    return NextResponse.json({ error: 'Failed to delete form' }, { status: 500 });
  }
}
