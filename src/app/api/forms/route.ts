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
  status?: 'active' | 'hidden';
}

export async function GET() {
  try {
    const formsData = fs.readFileSync(formsFilePath, 'utf8');
    const forms = JSON.parse(formsData);
    return NextResponse.json(forms);
  } catch (error) {
    console.error('Error reading forms:', error);
    return NextResponse.json({ error: 'Failed to read forms' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, type, subtitle, package: formPackage } = body;

    if (!title || !type || !subtitle) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const formsData = fs.readFileSync(formsFilePath, 'utf8');
    const forms = JSON.parse(formsData);

    const newForm: Form = {
      id: `${title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
      title,
      type,
      subtitle,
      package: formPackage,
      status: 'active'
    };

    forms.forms.push(newForm);

    fs.writeFileSync(formsFilePath, JSON.stringify(forms, null, 2));

    return NextResponse.json(newForm, { status: 201 });
  } catch (error) {
    console.error('Error creating form:', error);
    return NextResponse.json({ error: 'Failed to create form' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, type, subtitle, package: formPackage, status } = body;

    if (!id) {
      return NextResponse.json({ error: 'Form ID is required' }, { status: 400 });
    }

    const formsData = fs.readFileSync(formsFilePath, 'utf8');
    const forms = JSON.parse(formsData);

    const formIndex = forms.forms.findIndex((form: Form) => form.id === id);

    if (formIndex === -1) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    const updatedForm = {
      ...forms.forms[formIndex],
      title: title || forms.forms[formIndex].title,
      type: type || forms.forms[formIndex].type,
      subtitle: subtitle || forms.forms[formIndex].subtitle,
      package: formPackage || forms.forms[formIndex].package,
      status: status || forms.forms[formIndex].status,
    };

    forms.forms[formIndex] = updatedForm;

    fs.writeFileSync(formsFilePath, JSON.stringify(forms, null, 2));

    return NextResponse.json(updatedForm);
  } catch (error) {
    console.error('Error updating form:', error);
    return NextResponse.json({ error: 'Failed to update form' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Form ID is required' }, { status: 400 });
    }

    const formsData = fs.readFileSync(formsFilePath, 'utf8');
    const forms = JSON.parse(formsData);

    const initialLength = forms.forms.length;
    forms.forms = forms.forms.filter((form: Form) => form.id !== id);

    if (forms.forms.length === initialLength) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    fs.writeFileSync(formsFilePath, JSON.stringify(forms, null, 2));

    return NextResponse.json({ message: 'Form deleted successfully' });
  } catch (error) {
    console.error('Error deleting form:', error);
    return NextResponse.json({ error: 'Failed to delete form' }, { status: 500 });
  }
}