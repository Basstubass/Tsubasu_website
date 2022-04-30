import React from 'react';
import './footer.css';
import header_image from "../Header_com/img/header_icon.png";


// get our fontawesome imports
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Footer = () => {
    return (
            <div className="footer_elem">
                <hr></hr>
                <div className="footer_main">
                        <div className="FooterLink" to="/">
                            <img src={header_image} alt="Logo"></img>
                        </div>
                        <div className="Bars">
                        </div>
                        <div className="FooterMenu">
                            <a href="/">
                                <div className="NavLink" to="/Portfolio">
                                    Portfolio
                                </div>
                            </a>
                            <a href="/about">
                                <div className="NavLink" to="/About">
                                    About
                                </div>
                            </a>
                            <a href="/contact">
                                <div className="NavLink" to="/Contact">
                                    Contact
                                </div>
                            </a>
                            <div className="footer_icon">
                                <div className="footer_icon_f" to="/icon">
                                    <a href="*">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </div> 
                               <div className="footer_icon_in" to="/icon">
                                    <a href="https://www.instagram.com/bass_ta_tubass/">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                                <div className="footer_icon_Tw" to="/icon">
                                    <a href="*">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </div>
                                <div className="footer_icon_You" to="/icon">
                                    <a href="https://www.youtube.com/channel/UCgVZq_PmJ45hcO4v-1x478Q">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        
                </div>
            </div>
    )
}

export default Footer