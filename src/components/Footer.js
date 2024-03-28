import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';



function Footer (){
    return(
        <footer>
            <h3>Thank you for visiting!</h3>
            <p>Feel free to message me on LinkedIn or by email!</p>
            <div>
                <img src={githubIcon} alt="GitHub Icon" />
                <img src={linkedinIcon} alt="LinkedIn Icon" />
                <img src={emailIcon} alt="Email Icon" />
            </div>
            <p>&copy; All rights reserved.Candy Kwong.</p>
        </footer>
        
    )
}
export default Footer;