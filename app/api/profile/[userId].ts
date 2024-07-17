import { getProfileById } from "./getProfile";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (userId) {
    const profile = await getProfileById(userId);
    return NextResponse.json({ allProfiles: profile }, { status: 200 });
  }
}
