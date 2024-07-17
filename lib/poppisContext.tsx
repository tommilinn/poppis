"use client"

import { IUser } from "@/app/api/types";
import useProfileDetails from "@/lib/hooks/useProfileDetails";
import { createContext, useContext, ReactNode } from "react";

interface PoppisContextType {
  setUserId: (id: string | undefined) => void;
  userDetails: IUser | null;
}

const PoppisContext = createContext<PoppisContextType | undefined>(undefined);

export const PoppisProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data } = useProfileDetails(undefined);
  
  return (
    <PoppisContext.Provider value={{setUserId: useProfileDetails,  userDetails: data ?? null}}>
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
