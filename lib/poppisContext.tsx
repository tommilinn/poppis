"use client"

import { IUser } from "@/app/api/types";
import useProfileDetails from "@/lib/hooks/useProfileDetails";
import { createContext, useContext, ReactNode } from "react";

interface PoppisContextType {
  setProfileId?: (id: string | undefined) => void;
  profileDetails: IUser | null;
}

const PoppisContext = createContext<PoppisContextType | undefined>(undefined);

export const PoppisProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { profileDetails, setProfileId } = useProfileDetails(undefined);
  
  return (
    <PoppisContext.Provider value={{setProfileId,  profileDetails: profileDetails ?? null}}>
      {children}
    </PoppisContext.Provider>
  );
};

export const usePoppis = (): PoppisContextType => {
  const context = useContext(PoppisContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
