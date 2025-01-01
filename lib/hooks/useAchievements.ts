import { useQuery } from "@tanstack/react-query";
import { IAchievement } from "@/lib/types";

const fetchAchievements = async () => {
  const response = await fetch("/api/achievements");
  return (await response.json()) as IAchievement[];
};

const useAchievements = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["achievements"],
    queryFn: async () => fetchAchievements(),
  });

  return { achievements: data ?? [], isLoading };
};

export default useAchievements;
