
import { useWishlistContext } from "../context/WishlistContext";
import WishlistComp from "./WishlistComp";

function Wishlist(props)
{
    const {wishlist,removeList} =useWishlistContext();
    return(
        <div className="wishlist-container">
            {
                wishlist.length > 0 ?
                wishlist.map((item,index) =>{
                    return(
                        <WishlistComp data={item} remove={() => {removeList(item)}} key={item.id} />
                    )
                })
                : null
            }
        </div>
    )
}

export default Wishlist;