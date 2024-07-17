import { NextRequest, NextResponse } from "next/server";
import { getProfileById } from "./getProfile";

export async function GET(request: NextRequest) {
    const { pathname } = new URL(request.url);
    const userId = pathname.split("/").pop();
  
  if (userId) {
    const profile = await getProfileById(userId);
    if (!profile) {
      return NextResponse.json(
        { message: "Profile not in database" },
        { status: 404 }
      );
    }
    return NextResponse.json({ ...profile }, { status: 200 });
  }
  return NextResponse.json({ message: "Profile not found" }, { status: 404 });
}
