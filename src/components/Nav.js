
import { NavLink } from 'react-router-dom';

const Nav = () => {

  
    return(
        <nav className='nav'>
            <ul>
                <li><NavLink to="/" class="active">Home</NavLink></li>
                <li><NavLink to="/about" class="about-active">About</NavLink></li>
                <li><NavLink to="/works" class="works-active">Works</NavLink></li>
            </ul>
        </nav>
    )
}
export default Nav;