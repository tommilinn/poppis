import { useQuery } from "@tanstack/react-query";

interface IAchievement {
  id: number;
  name: string;
  points: number;
  description?: string;
  group?: string;
}

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
