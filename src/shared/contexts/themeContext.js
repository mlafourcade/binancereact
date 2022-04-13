import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { DarkTheme, LightTheme } from '../themes';

import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

export const ContextData = createContext();
export const ThemeContext = createContext();

export const CustonProvider = ({ children }) => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleData = ({ name, email }) => {
        console.log('Dados Context', {name, email});

        setName(name);
        setEmail(email);
    }

    return (
        <ThemeProvider theme={LightTheme}>
            <ContextData.Provider value={{name, email, submit:handleData}}>
                { children }
            </ContextData.Provider>
        </ThemeProvider>
    )
}

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider =  ({ children }) => {

    const [themeName, setThemeName] = useState('light');
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const toogleTheme = useCallback(() =>{
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);

    const handleData = ({ name, email }) => {
        console.log('Dados Context', {name, email});

        setName(name);
        setEmail(email);
    };

    const theme = useMemo(() => {

        console.log('Provider themeName = ', {themeName});

        if (themeName === 'light')
            return LightTheme;

        return DarkTheme;

    }, [themeName]);

    return (
        <ThemeContext.Provider value={{themeName, toogleTheme}}>
            <ContextData.Provider value={{name, email, submit:handleData}}>
                <ThemeProvider theme={theme}>
                    <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                        { children }
                    </Box>
                </ThemeProvider>
            </ContextData.Provider>
        </ThemeContext.Provider>
    );
};










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
