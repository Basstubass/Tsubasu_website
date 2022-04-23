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
                            <div className="NavLink" to="/Portfolio">
                                Portfolio
                            </div>
                            <div className="NavLink" to="/About">
                                About
                            </div>
                            <div className="NavLink" to="/Contact">
                                Contact
                            </div>
                            <div className="footer_icon">
                                <div className="footer_icon_f" to="/icon">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </div>
                                <div className="footer_icon_in" to="/icon">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div className="footer_icon_Tw" to="/icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                                <div className="footer_icon_You" to="/icon">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                            </div>
                        </div>

                        
                </div>
            </div>
    )
}

export default Footer