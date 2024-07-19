"use client";

import { Card } from "@/components/ui/card";
import Spinner from "@/components/ui/spinner";
import useAchievementCategories from "@/lib/hooks/useAchievementsCategories";

const Hunting = () => {
  const { categories, isLoading } = useAchievementCategories();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center mb-4">Hunting Achievements</h2>
      {isLoading ? (
        <Spinner middle />
      ) : (
        categories.length &&
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
          {categories.map((category, index) => (
            <Card key={index} className="flex justify-center items-center">
              <h3>{category.name}</h3>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hunting;