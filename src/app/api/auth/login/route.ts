import { NextResponse } from 'next/server';
import clientPromise from "@/lib/mongodb";
import { compare } from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing email or password" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("kmaris");
    
    // Find user
    const user = await db.collection("users").findOne({ email });
    
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Verify password
    const isValid = await compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Don't send password in response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ 
      user: userWithoutPassword,
      message: "Logged in successfully" 
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Error logging in" },
      { status: 500 }
    );
  }
}
