import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

interface FormUpdatePayload {
  title?: string;
  type?: string;
  subtitle?: string;
  package?: string;
  status?: 'active' | 'locked';
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db('kmarisDB');
    const formId = params.id;
    const body = await request.json();
    const { title, type, subtitle, package: formPackage, status } = body;

    if (!ObjectId.isValid(formId)) {
      return NextResponse.json({ error: 'Invalid form ID' }, { status: 400 });
    }

    const updateData: FormUpdatePayload = {};
    if (title) updateData.title = title;
    if (type) updateData.type = type;
    if (subtitle) updateData.subtitle = subtitle;
    if (formPackage) updateData.package = formPackage;
    if (status) updateData.status = status;


    const result = await db.collection('forms').findOneAndUpdate(
      { _id: new ObjectId(formId) },
      { $set: updateData },
      { returnDocument: 'after' }
    );

    if (!result) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating form:', error);
    return NextResponse.json({ error: 'Failed to update form' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db('kmarisDB');
    const formId = params.id;

    if (!ObjectId.isValid(formId)) {
      return NextResponse.json({ error: 'Invalid form ID' }, { status: 400 });
    }

    const result = await db.collection('forms').findOneAndDelete({ _id: new ObjectId(formId) });

    if (!result) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Form deleted successfully', form: result });
  } catch (error) {
    console.error('Error deleting form:', error);
    return NextResponse.json({ error: 'Failed to delete form' }, { status: 500 });
  }
}