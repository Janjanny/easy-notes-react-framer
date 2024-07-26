import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();


const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((current) => current == "light" ? "light" : "dark");
    }

  return (
    <div>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    </div>
  )
}

export {ThemeProvider, ThemeContext}