import { NextRequest, NextResponse } from "next/server";
import * as jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  try {
    const tokenCookie = req.cookies.get("Authorization");
    const token = tokenCookie ? tokenCookie.value.replace("Bearer ", "") : null;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET ?? "Is this a risk?") as jwt.JwtPayload;
    const userId = decoded.userId;

    if (!userId) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    return NextResponse.json({ userId }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}