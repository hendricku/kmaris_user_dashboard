import { NextResponse } from 'next/server';
import clientPromise from "@/lib/mongodb";
import { ObjectId } from 'mongodb';

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { clientId, status } = body;

    if (!clientId || !status) {
      return NextResponse.json(
        { error: "Client ID and status are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("kmaris");
    
   
    const result = await db.collection("users").updateOne(
      { _id: new ObjectId(clientId) },
      { $set: { 
        status,
        updatedAt: new Date()
      }}
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Client not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: `Client status updated to ${status} successfully`,
      status: status
    });
  } catch (error) {
    console.error("Update client error:", error);
    return NextResponse.json(
      { error: "Error updating client status" },
      { status: 500 }
    );
  }
}