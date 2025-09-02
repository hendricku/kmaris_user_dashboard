import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

// Define an interface for the form data
interface Form {
  _id: ObjectId;
  title: string;
  type: string;
  subtitle: string;
  package: string;
  status: string;
}

// Define an interface for the update payload
interface FormUpdatePayload {
  title?: string;
  type?: string;
  subtitle?: string;
  package?: string;
  status?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const formId = Array.isArray(id) ? id[0] : id;

  if (!formId || !ObjectId.isValid(formId)) {
    return res.status(400).json({ error: 'Invalid form ID' });
  }

  if (req.method === 'PUT') {
    try {
      const client = await clientPromise;
      const db = client.db('kmarisDB');
      const { title, type, subtitle, package: formPackage, status } = req.body;

      const updateData: FormUpdatePayload = {};
      if (title) updateData.title = title;
      if (type) updateData.type = type;
      if (subtitle) updateData.subtitle = subtitle;
      if (formPackage) updateData.package = formPackage;
      if (status) updateData.status = status;

      const result = await db
        .collection<Form>('forms')
        .findOneAndUpdate(
          { _id: new ObjectId(formId) },
          { $set: updateData },
          { returnDocument: 'after' }
        );

      if (!result) {
        return res.status(404).json({ error: 'Form not found' });
      }

      return res.status(200).json(result);
    } catch (error) {
      console.error('Error updating form:', error);
      return res.status(500).json({ error: 'Failed to update form' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const client = await clientPromise;
      const db = client.db('kmarisDB');

      const result = await db
        .collection<Form>('forms')
        .findOneAndDelete({ _id: new ObjectId(formId) });

      if (!result) {
        return res.status(404).json({ error: 'Form not found' });
      }

      return res.status(200).json({
        message: 'Form deleted successfully',
        form: result,
      });
    } catch (error) {
      console.error('Error deleting form:', error);
      return res.status(500).json({ error: 'Failed to delete form' });
    }
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}