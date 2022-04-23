import React from 'react'
import './header.css';
import header_image from "./img/header_icon.png"


const Navbar = () => {
    return (
            <div className="Nav">
                <div className="NavLink" to="/">
                    <img src={header_image} alt="Logo"></img>
                </div>
                <div className="Bars">
                </div>
                <div className="NavMenu">
                    <a href="/">
                        <div className="NavLink" to={`/`}>
                            Portfolio
                        </div>
                    </a>
                    <a href="/About">
                        <div className="NavLink" to={`/About`}>
                            About
                        </div>
                    </a>
                    <a href="/Contact">
                        <div className="NavLink" to="/Contact">
                            Contact
                        </div>
                    </a>
                </div>
            </div>
    )
}

export default Navbar
