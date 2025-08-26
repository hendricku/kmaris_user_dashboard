import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    // Ensure clientPromise is inside try/catch
    const client = await clientPromise;
    if (!client) {
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }

    const db = client.db("kmaris");

    // Ensure collection exists
    const collections = await db.listCollections().toArray();
    const hasUsersCollection = collections.some(col => col.name === "users");

    if (!hasUsersCollection) {
      await db.createCollection("users");
      await db.collection("users").createIndex({ email: 1 }, { unique: true });
    }

    // Fetch users
    const clients = await db
      .collection("users")
      .find({ status: { $ne: "archived" } })
      .project({ password: 0 })
      .sort({ createdAt: -1 })
      .toArray();

    // Convert ObjectId safely
    const safeClients = clients.map(c => ({
      ...c,
      _id: c._id?.toString(),
    }));

    return NextResponse.json(safeClients, { status: 200 });
  } catch (error) {
    console.error("API /api/clients GET error:", error);

    // Always return JSON, never fall back to HTML
    return NextResponse.json(
      {
        error: "Error fetching clients",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
