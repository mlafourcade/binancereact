
import { createContext } from "react";

export const ContextData = createContext();










/*import React, { createContext } from "react";
import { LightTheme } from "../themes"
import { DarkTheme } from "../themes"

interface IThemeContextData {
    themeName: 'light' | 'dark';
    toogleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const AppThemeProvider: React.FC = ({children}) => {

    return (
        <ThemeContext.Provider value={themeName, toogleTheme}>
            <ThemeProvider theme={DarkTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>

    )
}*/
