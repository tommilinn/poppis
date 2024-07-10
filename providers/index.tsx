"use client"

import React, { createContext } from "react";

interface IUserContext {
    isLogged: boolean;
    displayname?: string
}

interface IUserProviderProps { 
    children: React.ReactNode;  
}

const UserContext = createContext<IUserContext>({isLogged: false})

export default function UserProvider({ children }: IUserProviderProps) {
    const userContextValue: IUserContext = {
        isLogged: false, // Replace with your actual logic to check if the user is logged in
        displayname: undefined, // Replace with your actual logic to get the user's display name
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
}