"use client"; // Required for Context

import { createContext, useContext, useState } from "react";
const SessionDataContext = createContext(undefined);

export function SessionDataProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    userId: undefined,
    email: undefined,
  });

  const isUserDetailsAvailable = !!(userDetails.userId && userDetails.email);

  return (
    <SessionDataContext.Provider
      value={{ userDetails, setUserDetails, isUserDetailsAvailable }}
    >
      {children}
    </SessionDataContext.Provider>
  );
}

// Custom hook for easier consumption
export function useSessionData() {
  const context = useContext(SessionDataContext);
  if (!context)
    throw new Error("useSessionData must be used within a SessionDataProvider");
  return context;
}
