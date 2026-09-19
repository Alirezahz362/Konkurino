import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(()=>{
    const savedTheme =localStorage.getItem('theme');

    return savedTheme ==='dark';
  });

  const toggleTheme=()=>{
    console.log('theme clicked')
    setDarkMode(prev=>!prev);

  }

    useEffect(()=>{
        
        if(darkMode){
            document.body.classList.add('dark-theme')
            localStorage.setItem('theme','dark')
        }else{
            document.body.classList.remove('dark-theme')
            localStorage.setItem('theme','light')
    }
},[darkMode]);

return(
    <ThemeContext.Provider value={{darkMode,toggleTheme}}>

    {children}

    </ThemeContext.Provider>
)
}


