import { IUser } from "@/app/api/types";
import { useQuery } from "@tanstack/react-query";

const fetchAllProfiles = async (
): Promise<IUser[]> => {
  const response = await fetch(`/api/profile/`);
  return await response.json();
};

const useAllProfiles = () =>
  useQuery({
    queryKey: ["allProfiles"],
    queryFn: () => fetchAllProfiles(),
  });

export default useAllProfiles;
