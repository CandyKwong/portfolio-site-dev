import Nav from "../components/Nav";
import Logo from '../assets/CK-logo-header.svg';
import { Link } from 'react-router-dom';


function Header(){
    return(
        <header id="masthead">
            <Link to="/" className="home-logo">
            <img src={Logo} alt="Logo"/>
            </Link>
           
                <Nav />

          
        </header>
    )
}
export default Header;