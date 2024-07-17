import { IUser } from "@/app/api/types";
import useUserDetails from "@/lib/hooks/useUserDetails";
import { createContext, useContext, useState, ReactNode } from "react";

interface PoppisContextType {
  setUserId: (id: string | undefined) => void;
  userDetails?: IUser;
}

const PoppisContext = createContext<PoppisContextType | undefined>(undefined);

export const PoppisProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data } = useUserDetails(undefined);

  return (
    <PoppisContext.Provider value={{setUserId: useUserDetails,  userDetails: data}}>
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
