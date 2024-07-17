import { getProfileById } from "./getProfile";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (userId) {
    const profile = await getProfileById(userId);
    if (!profile) {
      return NextResponse.json(
        { message: "Profile not found" },
        { status: 404 }
      ); 
    }
    return NextResponse.json({ profile }, { status: 200 });
  }
}
