import prisma from "@/lib/prisma";
import { IAchievementCategory } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest): Promise<NextResponse<IAchievementCategory[]>> => {
  const { searchParams } = new URL(request.url);
  const includeAchievements = 
    searchParams.get("includeAchievements") === "true";

    const categories = await prisma.categoryType.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        // Only include achievementTypes if requested
        ...(includeAchievements ? {
          achievementTypes: {
            select: {
              id: true,
              name: true,
              description: true,
              points: true,
              categoryId: true,
              groupId: true,
            }
          }
        } : null)
      }
    });
  if (!categories) {
    throw new Error(`Error fetching categories`);
  }

  return NextResponse.json(categories);
};