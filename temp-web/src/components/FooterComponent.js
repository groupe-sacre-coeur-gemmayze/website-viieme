import React from 'react';
import { Card, CardText, CardBody, CardLink, CardFooter,
    CardTitle, CardSubtitle, CardImg, CardImgOverlay } from 'reactstrap';

function Footer(props) {
    return(
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="assets/images/viieme-logo.png" height="100" />
                            <nav className="nav-footer">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="/home">
                                            <p>Acceuil</p> 
                                        </a>
                                    </li><li className="list-inline-item"></li>

                                    <li className="list-inline-item">
                                        <a href="#"> 
                                            <p>A Propos</p>
                                        </a>
                                    </li><li className="list-inline-item"></li>

                                    <li className="list-inline-item">
                                        <a href="#">
                                            <p>Activitiés</p> 
                                        </a>
                                    </li><li className="list-inline-item"></li>

                                    <li className="list-inline-item">
                                        <a href="#">
                                            <p>Anciens</p> 
                                        </a>
                                    </li><li className="list-inline-item"></li>

                                    <li className="list-inline-item">
                                        <a href="#">
                                            <p>Branches</p> 
                                        </a>
                                    </li><li className="list-inline-item"></li>
                                    
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <p>Contactez-nous</p> 
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="socials-a">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/sdlgroupesacrecoeurgemmayze/" target="blank">
                                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/sdl_grpsacrecoeurgemmayze/" target="blank">
                                            <i className="fab fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/sdl_grpsacrecoeurgemmayze/" target="blank">
                                            <i className="fab fa-youtube" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/sdl_grpsacrecoeurgemmayze/" target="blank">
                                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <img width="100%" src="./assets/images/footer2.png"/>
                            <div class="copyright-footer">
                                <p class="copyright color-text-a">
                                    &copy; Copyright
                                    <span class="color-a"> Groupe Sacré-Coeur Gemmayzé</span> All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;