import { Link } from 'react-router-dom';
import './css/Header.css';

function Header(props)
{
    return(
        <header>
            <nav>
                <ul className='nav-list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;