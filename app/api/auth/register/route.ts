// src/pages/api/auth/[...nextauth].ts
import { NextRequest, NextResponse } from "next/server";
import { createUserWithAuth } from "./createUserWithAuth";

interface AuthRequestBody {
  username: string;
  password: string;
  displayName?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: AuthRequestBody = await req.json();
    const { username, password } = body;
    const displayName = body.displayName || username;

    // Change testuser with your actual database query
    const userId = await createUserWithAuth(username, displayName, password);

    return NextResponse.json(userId, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
