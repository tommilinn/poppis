"use client"

import Spinner from "@/components/ui/spinner";
import useAchievements from "@/lib/hooks/useAchievements";

const Hunting = () => {
  const { achievements, isLoading } = useAchievements();

  return (
    <div>
      <h2>Hunting Achievements</h2>
      {isLoading ? (
        <Spinner middle />
      ) : (
        achievements.map((achievement) => (
          <div key={achievement.id}>
            <h3>{achievement.name}</h3>
            <p>{achievement.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Hunting;
