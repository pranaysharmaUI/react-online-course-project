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
                    <ul className="sidebar-filter-list info-list">
                        <li><NavLink to="/profile" end>Info</NavLink></li>
                        <li><NavLink to="/profile/wishlist" end>Wishlist</NavLink></li>
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