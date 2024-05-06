'use client';
// ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface Theme {
    mode: 'light' | 'dark';
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
    backgroundColor: string;
}

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const defaultTheme: Theme = {
    mode: 'dark',
    primaryColor: 'blue-300',
    secondaryColor: 'green-300',
    textColor: 'gray-100',
    backgroundColor: 'gray-800',
};

const lightTheme: Theme = {
    mode: 'light',
    primaryColor: 'blue-500',
    secondaryColor: 'green-500',
    textColor: 'gray-900',
    backgroundColor: 'gray-100',
};

// Create the theme context with a default value
const defaultThemeContextValue: ThemeContextType = {
    theme: defaultTheme,
    toggleTheme: () => { },
};
const ThemeContext = createContext(defaultThemeContextValue);

// Implement the ThemeProvider component
export const ThemeProvider = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const [theme, setTheme] = useState(defaultThemeContextValue.theme);

    const toggleTheme = () => {
        setTheme((prevTheme: any) => ({
            ...prevTheme,
            mode: prevTheme.mode === 'light' ? defaultTheme : lightTheme,
        }));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Create a custom hook to access the theme context
export const useTheme = (): ThemeContextType => useContext(ThemeContext);