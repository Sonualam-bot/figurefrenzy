import "./footerStyle.css";

// Importing React Icons
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

export const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div class="footer-container">
                    <div class="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            {/* <li>
                                <span>Delivary</span>
                            </li> */}
                            <li>
                                <span>Privacy Policy</span>
                            </li>
                            <li>
                                <span>Secure payment</span>
                            </li>
                            <li>
                                <span>About Us</span>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-contact">
                        <h4>Contact Us</h4>
                        <p>Diyun, Namsai </p>
                        <p>Phone: +91-3435-6485</p>
                        <p>Email: renonquid@gmail.com</p>
                    </div>

                    <div class="footer-social">
                        <h4>Get In Touch</h4>
                        <ul>
                            <li>
                                <a href="https://github.com/Sonualam-bot/figurefrenzy" target="_blank" >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/mdsonualam/" target="_blank" >
                                    <AiFillLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/muhammadsonu15" target="_blank">
                                    <AiFillTwitterCircle />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};