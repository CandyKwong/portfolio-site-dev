import Nav from "../components/Nav";
import Logo from '../assets/CK-logo.svg';
import { Link } from 'react-router-dom';


function Header(){
    return(
        <header id="masthead">
            <Link to="/" className="home-logo">
            <img src={Logo} alt="Logo"/>
            </Link>
            <nav className='nav'>
                <Nav />

            </nav>
        </header>
    )
}
export default Header;