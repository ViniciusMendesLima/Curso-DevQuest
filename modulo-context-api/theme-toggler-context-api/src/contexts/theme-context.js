// import { createContext, useState } from "react";

// export const themes = {
//     light:{
//         color: '#000000',
//         background: '#eeeeee'
//     },
//     dark:{
//         color: '#ffffff',
//         background: '#000000'
//     }
// }

// export const ThemeContext = createContext({})

// export const ThemeProvider = (props) => {

//     const [ theme, setTheme] = useState(themes.light)
//     return (
//         <ThemeContext.Provider value={{theme, setTheme}}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }

import { createContext, useState, useEffect } from "react";

export const themes = {
    light: {
        color: '#000000',
        background: '#eeeeee'
    },
    dark: {
        color: '#ffffff',
        background: '#000000'
    }
}

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(() => {
        try {
            const savedTheme = localStorage.getItem('theme');
            // Se não existir no localStorage, retorna o tema light como padrão
            if (!savedTheme) return themes.light;
            
            // Tenta parsear o JSON
            const parsed = JSON.parse(savedTheme);
            
            // Verifica se o tema parseado é válido
            return parsed && (parsed.color && parsed.background) 
                ? parsed 
                : themes.light;
        } catch (e) {
            console.error("Failed to parse theme from localStorage", e);
            return themes.light;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('theme', JSON.stringify(theme));
        } catch (e) {
            console.error("Failed to save theme to localStorage", e);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}