"use client";

import React from 'react';
import type{ SectionType } from "@/lib/type";

type ActiveSectionContextProviderProps = {children : React.ReactNode};

type ActiveSectionContextType = {
  activeSection: SectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    
    const [activeSection, setActiveSection] = React.useState<SectionType>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = React.useState(0);
  return (
    <ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext);
  if(context == null)
    throw new Error("cant use useActiveSectionContext outside of context");
  return context;
}