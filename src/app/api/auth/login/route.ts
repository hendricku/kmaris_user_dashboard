import { NextResponse } from 'next/server';
import { connectToDatabase } from "@/lib/mongodb";
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

    const db = await connectToDatabase();
    
    // Find user
    const user = await db.collection("users").findOne({ email });
    
    if (!user) {
      return NextResponse.json(
        { error: "Email not found" },
        { status: 401 }
      );
    }

    // Verify password
    const isValid = await compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Wrong password, please try again" },
        { status: 401 }
      );
    }

    // Check if user is approved (for clients only)
    if (user.role === "client" && user.status !== "approved") {
      return NextResponse.json(
        { error: "Your account is pending approval. Please wait for admin approval." },
        { status: 403 }
      );
    }

    // Don't send password in response
    // Remove password from user object before sending response
    const { password, ...userWithoutPassword } = user;

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
