"use client";

import React, { useContext } from 'react'

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType|null>(null);

type ThemeContextProviderProps = {
    children : React.ReactNode;
}

export default function ThemeContextProvider({ children } : ThemeContextProviderProps) {
    const [theme, setTheme] = React.useState<Theme>("light");

const toggleTheme = () => {
        setTheme((prevTheme: Theme) => {
            if(prevTheme=="light"){
                window.localStorage.setItem("theme", "dark");
                document.documentElement.classList.add("dark");
                return "dark";
            } else{
                window.localStorage.setItem("theme", "light");
                document.documentElement.classList.remove("dark");
                return "light";
            }
        });
    }

React.useEffect(() => {
    const theme = window.localStorage.getItem('theme') as Theme | null;
    
    if(theme){
        setTheme(theme);
        if(theme == "dark"){
            document.documentElement.classList.add("dark");
        }
    }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        setTheme("dark");
        document.documentElement.classList.add("dark");
    }

}, [])

return <ThemeContext.Provider value={{
    theme,
    toggleTheme,
}}>{children}</ThemeContext.Provider>

}

export function useTheme(){
    const context = useContext(ThemeContext);
    if(context == null)
    throw new Error("cant use useTheme outside of contextProvider");
  return context;
}