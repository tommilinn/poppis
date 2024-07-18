import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { getAuthWithUsername } from "./getAuthWithUsername";
import { cookies } from "next/headers";

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

    const dbuser = await getAuthWithUsername(username);

    const passwordCorrect = !dbuser
      ? false
      : await bcrypt.compare(password, dbuser.auth.password);

    if (!(dbuser && passwordCorrect)) {
      const e = new Error("Invalid username or password");
      e.name = "Unauthorized";
      throw e;
    }

    const token = jwt.sign(
      { userId: dbuser.id, username },
      process.env.JWT_SECRET ?? "Is this a risk?"
    );

    const response = NextResponse.json({ userId: dbuser.id }, { status: 200 });
    response.cookies.set("Authorization", `Bearer ${token}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
