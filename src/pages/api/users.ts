import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";

type User = {
  _id: string;
  name: string;
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | { error: string }>
) {
  try {
    const db = await connectToDatabase();
    const users = await db.collection<User>("users").find({}).toArray();
    res.status(200).json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Unable to fetch users" });
  }
}
