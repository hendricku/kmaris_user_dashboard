import { NextResponse } from 'next/server';
import clientPromise from "@/lib/mongodb";
import { hash } from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, mobile, password } = body;

    // Validate input
    if (!firstName || !lastName || !email || !mobile || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("kmaris");
    
    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    const newUser = {
      firstName,
      lastName,
      email,
      mobile,
      password: hashedPassword,
      role: "client",
      status: "pending",
      createdAt: new Date(),
    };

    console.log("Creating new user:", { ...newUser, password: '[HIDDEN]' });
    
    // Create user
    const result = await db.collection("users").insertOne(newUser);

    return NextResponse.json(
      { message: "User created successfully", userId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Error creating user" },
      { status: 500 }
    );
  }
}
