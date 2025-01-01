import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const client = prisma;

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const includeAchievements =
    searchParams.get("includeAchievements") === "true";

    const categories = await client.categoryType.findMany({
        include: includeAchievements ? { achievementTypes: true } : undefined,
      });
    
    
  if (!categories) {
    throw new Error(`Error fetching achievements`);
  }

  return NextResponse.json(categories);
};
