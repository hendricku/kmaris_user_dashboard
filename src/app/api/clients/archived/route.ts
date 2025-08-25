import { NextResponse } from 'next/server';
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await connectToDatabase();
    
    const archivedClients = await db.collection("users")
      .find({ status: "archived" })
      .project({ password: 0 })
      .sort({ updatedAt: -1 })
      .toArray();

    return NextResponse.json(archivedClients);
  } catch (error) {
    console.error("Error fetching archived clients:", error);
    return NextResponse.json(
      { error: "Error fetching archived clients" },
      { status: 500 }
    );
  }
}
