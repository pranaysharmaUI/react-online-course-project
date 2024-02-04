import { Link } from "react-router-dom";
import "../components/css/WishlistComp.css";

function WishlistComp({data,remove})
{
    return(
        <div className="wishlist-component">
            <button type="button" className="remove-wishlist" onClick={() => {remove()}}>&times;</button>
            <div className="wishlist-image">
                <img src={data.img} alt="Wishlist" />

            </div>
            <div className="wishlist-info">
                <Link to={`/courses/:${data.id}`} state={data}>{data.title}</Link>
            </div>
        </div>
    )
}

export default WishlistComp;