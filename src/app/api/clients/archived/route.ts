import { NextResponse } from 'next/server';
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("kmaris");
    
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
