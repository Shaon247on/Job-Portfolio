"use client"
import { createContext, useEffect, useState } from "react";

export const ContextTheme = new createContext(null)

const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState('light')

useEffect(()=>{
    const storedTheme = localStorage.getItem("Theme",) || "Light"
    setTheme(storedTheme)
},[theme])

const changeTheme= (theme)=>{
    setTheme(theme)
    localStorage.setItem("Theme", theme)
}

    return (
        <ContextTheme.Provider value={{
            changeTheme,
            theme
        }}>
            {children}
        </ContextTheme.Provider>
    );
};

export default ThemeContext;