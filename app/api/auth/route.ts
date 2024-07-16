// src/pages/api/auth/[...nextauth].ts
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { IUser } from "../types";

interface AuthRequestBody {
  username: string;
  password: string;
  displayName?: string;
}

interface IResponseData {
  username: string;
  token: string;
  displayName?: string;
}
const dbTestUser: IUser = {
  username: "testUser",
  password: bcrypt.hashSync("testPass", 10),
  displayName: "Test User",
};

export async function POST(
  req: NextRequest
) {
  try {
    const body: AuthRequestBody  = await req.json();
    const { username, password } = body;
    const nickname = body.displayName || username;
    
    // Change testuser with your actual database query
    const passwordCorrect =
    !dbTestUser
    ? false
    : await bcrypt.compare(password, dbTestUser.password);
    
    if (!(dbTestUser && passwordCorrect)) {
      const e = new Error("Invalid username or password");
      e.name = "Unauthorized";
      throw e;
    }
    
    const token = jwt.sign(username, process.env.JWT_SECRET ?? "Is this a risk?");

    return NextResponse.json({ username, token, displayName: nickname }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
