import { NextResponse } from 'next/server';
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    console.log("Connecting to database...");
    const db = await connectToDatabase();
    console.log("Database connected successfully");
    
    // Ensure users collection exists
    const collections = await db.listCollections().toArray();
    const hasUsersCollection = collections.some(col => col.name === 'users');
    console.log("Has users collection:", hasUsersCollection);

    if (!hasUsersCollection) {
      console.log("Creating users collection...");
      await db.createCollection("users");
      // Create an index on email for faster lookups
      await db.collection("users").createIndex({ email: 1 }, { unique: true });
    }

    console.log("Fetching clients...");
    const clients = await db.collection("users")
      .find({ 
        status: { $ne: "archived" } // Exclude archived clients
      })
      .project({ password: 0 }) // Exclude password field
      .sort({ createdAt: -1 })
      .toArray();

    console.log(`Found ${clients.length} clients`);
    return NextResponse.json(clients);
  } catch (error) {
    console.error("Error details:", error);
    return NextResponse.json(
      { 
        error: "Error fetching clients",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
