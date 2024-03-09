import { createContext, useContext } from "react";

const WishlistContext=createContext({});


export const WishlistProvider=({children,value})=>
(
    <WishlistContext.Provider value={value}>
        {children}
    </WishlistContext.Provider>
)


export const useWishlistContext=()=>
{
    let value=useContext(WishlistContext);
    if(value === null)
    {
        throw new Error("Wishlist context error")
    }

    return value;
}