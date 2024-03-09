import { createContext, useContext } from "react";

const AppContext=createContext({});


export const AppProvider=({children,value}) =>
(
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
)


export const useAppContext=() =>
{
    const value=useContext(AppContext);
    if(value === null) throw new Error("Error in context");

    return value;
}
