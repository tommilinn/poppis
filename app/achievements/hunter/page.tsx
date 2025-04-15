"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Spinner from "@/components/ui/spinner";
import useAchievementCategories from "@/lib/hooks/useAchievementsCategories";
import { createCard } from "./util";

const Hunting = () => {
  const includeAchievements = true;
  const { categories, isLoading } = useAchievementCategories(includeAchievements);

  return (
    <div className="flex flex-col items-center w-full px-4">
      <h2 className="text-center mb-4 text-xl font-semibold">Hunting Achievements</h2>
      {isLoading ? (
        <Spinner middle />
      ) : (
        categories.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-md">
            {categories.map((category, index) => (
              <AccordionItem key={`category-${index}`} value={`category-${index}`}>
                <AccordionTrigger className="font-semibold">
                  {category.name}
                </AccordionTrigger>
                <AccordionContent>
                  {createCard({
                    name: category.name,
                    achievements: category.achievementTypes,
                  })}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )
      )}
    </div>
  );
};

export default Hunting;