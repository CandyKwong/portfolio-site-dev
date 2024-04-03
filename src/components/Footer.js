import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';



function Footer (){
    return(
        <footer>
            <section className="footer-section">
                <div className="footer-blurb">
                    <h3>Thank you for visiting!</h3>
                    <p>Feel free to message me on LinkedIn or by email!</p>
                </div>
                <div className="social-media-icons">
                    <a href="https://github.com/CandyKwong">
                        <img src={githubIcon} alt="GitHub Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/candykwongdev/">
                        <img src={linkedinIcon} alt="LinkedIn Icon" />
                    </a>
                    <a href="mailto: kwongcandy@outlook.com">
                    <img src={emailIcon} alt="Email Icon" />
                    </a>
                </div>
                <div className="copyright">
                    <p>&copy; All rights reserved.Candy Kwong.</p>
                </div>
            </section>
        </footer>
        
    )
}
export default Footer;