import { useContext } from "react";
import WishlistContext from "../context/WishlistContext";

function useWishlist(data)
{
    const {wishlist}=useContext(WishlistContext);
    let status=false;

    wishlist.length > 0 ?
     wishlist.map((item,index) =>
    {
        if(item.id === data.id && item.type === data.type)
        {
            status=true;
        }
        
    })
    : status=false

    return status;
}

export default useWishlist;