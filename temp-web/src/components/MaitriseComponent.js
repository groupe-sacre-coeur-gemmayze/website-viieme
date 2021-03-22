import React from 'react';
import { Tabs, Tab, Sonnet } from 'react-bootstrap';

function Maitrise(props) {

    return(
        <div>
            {/**PAGE TITLE */}
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">La Maîtrise</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**LINKS TO MAITRISE LISTS */}
            <section className="property-single nav-arrow-b">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <ul className=" nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
                                {/**MAITRISE DE GROUPE TAB */}
                                <li className="nav-item">
                                    <a className="nav-link active" id="pills-mdg-tab" data-toggle="pill" href="#pills-mdg" role="tab" aria-controls="pills-mdg" aria-selected="true">Maîtrise de Groupe</a>
                                </li>
                                {/**MEUTES TAB */}
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-meutes-tab" data-toggle="pill" href="#pills-meutes" role="tab" aria-controls="pills-meutes" aria-selected="false">Les Meutes</a>
                                </li>
                                {/**TROUPES TAB */}
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-troupes-tab" data-toggle="pill" href="#pills-troupes" role="tab" aria-controls="pills-troupe" aria-selected="false">Les Troupes</a>
                                </li>
                                {/**CLANS TAB */}
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-clans-tab" data-toggle="pill" href="#pills-clans" role="tab" aria-controls="pills-clan" aria-selected="false">Les Clans</a>
                                </li>
                            </ul>
                            <br/>

                        
                            <div class="tab-content" id="pills-tabContent">
                                {/**MAITRISE DE GROUPE CONTENT */}
                                <div class="tab-pane fade show active" id="pills-mdg" role="tabpanel" aria-labelledby="pills-mdg-tab">
                                    <div className="row">


                                        {/**CHEF DE GROUPE */}
                                        <div className="col-md-4">
                                            <div className="title-wrap d-flex justify-content-between">
                                                <div className="title-box">
                                                    <h2 className=" title-a">Chef de Groupe</h2>
                                                </div>
                                            </div>
                                            <div className="card-box-d">
                                                <div className="card-img-d">
                                                    <img src="assets/images/anthony-jreige.jpeg" alt="" className="img-d img-fluid"/>
                                                </div>
                                                <div className="card-overlay card-overlay-hover">

                                                    <div className="card-header-d">
                                                        <div className="card-title-d align-self-center">
                                                            <h3 className="title-d">
                                                                <a href="agent-single.html" className="link-two">Anthony Jreige</a>
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <div className="card-body-d">
                                                        <p className="content-d color-text-a">
                                                            dit Hulotte Désopilant
                                                        </p>
                                                        <div className="info-agents color-a">
                                                            <p>
                                                                <strong>Phone: </strong> +961 71 145 497
                                                            </p>
                                                            <p>
                                                                <strong>Email: </strong> anthony@example.com
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        {/**AUMONIER DE GROUPE */}
                                        <div className="col-md-4">
                                            <div className="title-wrap d-flex justify-content-between">
                                                <div className="title-box">
                                                    <h2 className=" title-a">Aumonier de Groupe</h2>
                                                </div>
                                            </div>
                                            <div className="card-box-d">
                                                <div className="card-img-d">
                                                    <img src="assets/images/frere-jean-claude.jpg" alt="" className="img-d img-fluid"/>
                                                </div>
                                                <div className="card-overlay card-overlay-hover">

                                                    <div className="card-header-d">
                                                        <div className="card-title-d align-self-center">
                                                            <h3 className="title-d">
                                                                <a href="agent-single.html" className="link-two">Frère Jean-Claude Abou Atmeh</a>
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <div className="card-body-d">
                                                        <p className="content-d color-text-a">
                                                            dit Garo Altuiste
                                                        </p>
                                                        <div className="info-agents color-a">
                                                            <p>
                                                                <strong>Phone: </strong> +961 76 880 017
                                                            </p>
                                                            <p>
                                                                <strong>Email: </strong> frerejeanclaude@example.com
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        {/**SECRETAIRE DE GROUPE */}
                                        <div className="col-md-4">
                                            <div className="title-wrap d-flex justify-content-between">
                                                <div className="title-box">
                                                    <h2 className=" title-a">Secretaire de Groupe</h2>
                                                </div>
                                            </div>
                                            <div className="card-box-d">
                                                <div className="card-img-d">
                                                    <img src="assets/images/maroun-fahed.jpg" alt="" className="img-d img-fluid"/>
                                                </div>
                                                <div className="card-overlay card-overlay-hover">

                                                    <div className="card-header-d">
                                                        <div className="card-title-d align-self-center">
                                                            <h3 className="title-d">
                                                                <a href="agent-single.html" className="link-two">Maroun Fahed</a>
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <div className="card-body-d">
                                                        <p className="content-d color-text-a">
                                                            dit Hamadryas Laborieux
                                                        </p>
                                                        <div className="info-agents color-a">
                                                            <p>
                                                                <strong>Phone: </strong> +961 71 626 282
                                                            </p>
                                                            <p>
                                                                <strong>Email: </strong> maroun@example.com
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>



                                    </div>

                                </div>
                                
                                <div class="tab-pane fade" id="pills-meutes" role="tabpanel" aria-labelledby="pills-meutes-tab">
                                    <img src="assets/img/plan2.jpg" alt="" class="img-fluid"/>
                                </div>
                                <div class="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834" width="100%" height="460" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div>
                <br/><br/><br/>
            </div>

        </div>
    );

}

export default Maitrise;