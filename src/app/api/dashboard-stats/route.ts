import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const formsFilePath = path.join(process.cwd(), 'src', 'json', 'allforms.json');

interface Form {
  id: string;
  title: string;
  type: string;
  subtitle: string;
  package?: string;
  status?: 'active' | 'hidden' | 'pending';
}

interface AllForms {
    forms: Form[];
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("kmaris");

    const approvedClients = await db.collection("users").countDocuments({ status: { $nin: ["pending", "archived"] } });
    const pendingClients = await db.collection("users").countDocuments({ status: "pending" });

    const formsData = fs.readFileSync(formsFilePath, 'utf8');
    const allForms: AllForms = JSON.parse(formsData);
    
    const totalForms = allForms.forms.length;
    const pendingForms = allForms.forms.filter(form => form.status === 'pending').length;

    return NextResponse.json({
      approvedClients,
      totalForms,
      pendingForms,
      pendingClients,
    });
  } catch (error) {
    console.error("API /api/dashboard-stats GET error:", error);
    return NextResponse.json(
      {
        error: "Error fetching dashboard stats",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 } 
    );
  }
}