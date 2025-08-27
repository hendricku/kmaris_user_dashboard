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
    const { status } = body;

    if (!status || !['active', 'locked'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const formsData = fs.readFileSync(formsFilePath, 'utf8');
    const forms = JSON.parse(formsData);

    const formIndex = forms.forms.findIndex((form: Form) => form.id === formId);
    
    if (formIndex === -1) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    forms.forms[formIndex] = {
      ...forms.forms[formIndex],
      status
    };

    fs.writeFileSync(formsFilePath, JSON.stringify(forms, null, 2));

    return NextResponse.json(forms.forms[formIndex]);
  } catch (error) {
    console.error('Error updating form status:', error);
    return NextResponse.json({ error: 'Failed to update form status' }, { status: 500 });
  }
}
