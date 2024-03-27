import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';



function Footer (){
    return(
        <footer>
            <p>Thank you for visiting!</p>
            <p>Feel free to message me on LinkedIn or by email!</p>
            <img src={githubIcon} alt="GitHub Icon" />
            <img src={linkedinIcon} alt="LinkedIn Icon" />
            <img src={emailIcon} alt="Email Icon" />
            <p>&copy; All rights reserved.Candy Kwong.</p>
        </footer>
        
    )
}
export default Footer;