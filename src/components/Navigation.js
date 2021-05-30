import React from 'react';
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return (

        // Sidebar
        <div className="sidebar">

            {/* Profile */}
            <div className="id">
                <div className="idContent">
                    <img src="./media/billGates.jpg" alt="profil-pic" ></img>
                    <h3>Mario Ciari</h3>
                </div>
            </div>

            {/* Navigation */}
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Porfolio</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Social Icons */}
            <div className="social-icons">
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>

                    <li>
                        <a href="" target="_blank" rel="noopener noreferer">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>

                    <li>
                        <a href="" target="_blank" rel="noopener noreferer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>

                    <li>
                        <a href="" target="_blank" rel="noopener noreferer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>

                    <li>
                        <a href="" target="_blank" rel="noopener noreferer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>

                    <li>
                        <a href="" target="_blank" rel="noopener noreferer">
                            <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                </ul>
            </div>

            {/* signature */}
            <div class="signature">
                <p>Mario Ciari copyright 2021</p>
            </div>

        </div>
    );
};

export default Navigation;