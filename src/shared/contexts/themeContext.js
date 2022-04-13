import { createContext, useState } from "react";

export const ContextData = createContext();

export const CustonProvider = ({ children }) => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleData = ({ name, email }) => {
        console.log("Dados Context", {name, email});

        setName(name);
        setEmail(email);
    }

    return (
        <ContextData.Provider value={{name, email, submit:handleData}}>
            { children }
        </ContextData.Provider>
    )
}










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
