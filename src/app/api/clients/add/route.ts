import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, mobileNumber, password, role } = await request.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.collection('users').insertOne({
      firstName,
      lastName,
      email,
      mobileNumber,
      password: hashedPassword,
      status: 'approved',
      role: role || 'Client', // Default to 'Client' if not provided
      createdAt: new Date(),
    });

    // Find admin user to notify
    const adminUser = await db.collection('users').findOne({ email: 'ninong@gmail.com' });

    if (adminUser) {
      const notification = {
        message: `New client created: ${firstName} ${lastName}`,
        userId: adminUser._id,
        read: false,
        createdAt: new Date(),
      };
      await db.collection('notifications').insertOne(notification);
    }

    return NextResponse.json({ message: 'Client added successfully', clientId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Error adding client:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}