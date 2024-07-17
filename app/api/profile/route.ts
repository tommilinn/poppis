import { NextRequest, NextResponse } from "next/server";
import { getAllUsers } from "./getAllProfiles";

export const GET = async (req: NextRequest) => 
 NextResponse.json(await getAllUsers(), {status: 200});