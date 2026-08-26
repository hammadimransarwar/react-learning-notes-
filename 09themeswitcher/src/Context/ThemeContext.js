import React , {createContext,useContext } from "react";
export const theme=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})
export const ThemeContextProvider=theme.Provider;
export default function useTheme(){
    return useContext(theme);
}