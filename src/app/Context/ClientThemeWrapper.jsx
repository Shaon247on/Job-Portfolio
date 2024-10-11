"use client"

import { useContext } from "react";
import { ContextTheme } from "./ThemeContext";

const ClientThemeWrapper = ({children}) => {

    const {theme} = useContext(ContextTheme)
    console.log(theme);

    return (
        <div data-theme={theme}>
            {children}
        </div>
    );
};

export default ClientThemeWrapper;