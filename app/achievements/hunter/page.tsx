"use client";

import Spinner from "@/components/ui/spinner";
import useAchievementCategories from "@/lib/hooks/useAchievementsCategories";
import { createCard } from "./util";

const Hunting = () => {
  const includeAchievements = true;
  const { categories, isLoading } =
    useAchievementCategories(includeAchievements);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center mb-4">Hunting Achievements</h2>
      {isLoading ? (
        <Spinner middle />
      ) : (
        categories.length && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
            {categories.map((card, index) =>
              createCard(index, {
                name: card.name,
                achievements: card.achievementTypes,
              })
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Hunting;
