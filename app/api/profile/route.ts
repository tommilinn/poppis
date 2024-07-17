import { NextRequest, NextResponse } from "next/server";
import { getAllUsers } from "./getAllProfiles";

export async function POST(req: NextRequest) {
  const { method } = req;
  if (method === "GET") {
    return NextResponse.json({ allProfiles: await getAllUsers(), status: 200 });
  }
};
