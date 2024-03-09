
import { useWishlistContext } from "../context/WishlistContext";

function useWishlist(data)
{
    const {wishlist}=useWishlistContext();
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