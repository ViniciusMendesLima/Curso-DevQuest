// import { useContext } from "react"
// import { ThemeContext, themes } from "../../contexts/theme-context"
// import { Button } from "../button/button";

// export const ThemTogglerButton = () => {
//     const {theme, setTheme} = useContext(ThemeContext)
//     return (
//         <div>
//             <Button onClick={()=> setTheme(theme === themes.light ? themes.dark : themes.light)}>Clique aqui</Button>
//         </div>
//     )
// }

import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button";

export const ThemTogglerButton = () => {
    const context = useContext(ThemeContext);
    
    if (!context) {
        return null; // ou algum fallback
    }

    const { theme, setTheme } = context;
    
    return (
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                Clique aqui
            </Button>
        </div>
    )
}

