import { NavLink } from 'react-router-dom';
import './css/Header.css';

function Header(props)
{
    return(
        <header>
            <nav>
                <ul className='nav-list'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/courses">Courses</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;