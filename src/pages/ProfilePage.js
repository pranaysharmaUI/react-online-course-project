import { NavLink, Outlet} from "react-router-dom";
import Banner from "../components/Banner";
import '../components/css/ProfilePage.css';

function ProfilePage(props)
{
    return(
        <div className="">
            <Banner title="Profile" />
            <div className="profile-main-container">
                <div className="routes-sidebar">
                    <ul className="sidebar-filter-list">
                        <li><NavLink to="/profile">Info</NavLink></li>
                        <li><NavLink to="/profile/wishlist">Wishlist</NavLink></li>
                    </ul>

                </div>
                <div className="profile-component-container">
                <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;