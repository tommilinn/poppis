"use client"

import { IUser } from "@/app/api/types";
import useProfileDetails from "@/lib/hooks/useProfileDetails";
import { createContext, useContext, ReactNode } from "react";

interface PoppisContextType {
  setProfileId?: (id: string | undefined) => void;
  profileDetails: IUser | undefined;
}

const PoppisContext = createContext<PoppisContextType | undefined>(undefined);

export const PoppisProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {

  const { profileDetails, setProfileId } = useProfileDetails();
  
  return (
    <PoppisContext.Provider value={{setProfileId,  profileDetails: profileDetails ?? undefined}}>
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
