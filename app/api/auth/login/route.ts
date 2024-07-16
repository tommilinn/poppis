import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { getAuthWithUsername } from "./getAuthWithUsername";

interface AuthRequestBody {
    username: string;
    password: string;
    displayName?: string;
  }

export async function POST(
    req: NextRequest
  ) {
    try {
      const body: AuthRequestBody  = await req.json();
      const { username, password } = body;
      const displayName = body.displayName || username;
      
      // Change testuser with your actual database query
      const dbuser = await getAuthWithUsername(username);
  
      const passwordCorrect =
      !dbuser
      ? false
      : await bcrypt.compare(password, dbuser.auth.password);
      
      if (!(dbuser && passwordCorrect)) {
        const e = new Error("Invalid username or password");
        e.name = "Unauthorized";
        throw e;
      }
      
      const token = jwt.sign(username, process.env.JWT_SECRET ?? "Is this a risk?");
  
      return NextResponse.json({ token }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: (error as Error).message },
        { status: 500 }
      );
    }
  }
  