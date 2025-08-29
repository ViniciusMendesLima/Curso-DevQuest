import { createContext, useState } from "react";


export const ThemeContext = createContext({});

interface ThemeProviderProps {
    children: React.ReactNode
}

type ThemeName = "light" | "dark";

export const ThemeProvides = ( {children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeName>("dark");

    const toogleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }
    return (
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}