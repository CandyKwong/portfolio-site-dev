import Nav from "../components/Nav";
import Logo from '../assets/CK-logo-header.svg';
import { Link } from 'react-router-dom';


function Header(){
    return(
        <header id="masthead">
            <div className="logo-nav">
                <Link to="/" className="home-logo">
                <img src={Logo} alt="Logo"/>
                </Link>
                    <Nav />
            </div>

          
        </header>
    )
}
export default Header;