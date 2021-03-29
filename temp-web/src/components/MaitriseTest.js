import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

function MaitriseTest(props) {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

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

            <div className="col-md-8 offset-md-2">
                {/**TAB BAR */}
                <Nav className="nav nav-pills-a nav-pills mb-3" id="pills-tab" role="tablist">
                    {/**MAITRISE DE GROUPE TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Maîtrise de Groupe
                        </NavLink>
                    </NavItem>
                    {/**MEUTES TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Meutes
                        </NavLink>
                    </NavItem>
                    {/**TROUPES TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Troupes
                        </NavLink>
                    </NavItem>
                    {/**CLANS TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >
                            Clans
                        </NavLink>
                    </NavItem>

                </Nav>

                {/**MAITRISE CONTENT */}
                <TabContent activeTab={activeTab} className="tab-content" id="pills-tabContent">
                    {/**MDG CONTENT */}
                    <TabPane tabId="1" className="tab-pane fade show" id="pills-mdg" role="tabpanel" aria-labelledby="pills-mdg-tab">
                        <Row>
                            {/**CHEF DE GROUPE */}
                            <Col md="4" sm="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Chef de Groupe</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/anthony-jreige.jpeg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Anthony <br/> Jreige
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
                                                        <strong>Email: </strong> anthonyjreige@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Col>

                            {/**AUMONIER DE GROUPE */}
                            <Col md="4" sm="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Aumonier de Groupe</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/frere-jean-claude.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Frère <br/> Jean-Claude <br/> Abou-Atmeh</a>
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
                            </Col>

                            {/**SECRETAIRE DE GROUPE */}
                            <Col md="4" sm="4">                                         
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Secretaire de Groupe</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/maroun-fahed.jpg" alt="" className="img-d img-fluid"/>
                                    </div>

                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Maroun <br/> Fahed</a>
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
                                                        <strong>Email: </strong> marounfahed@example.com
                                                    </p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </TabPane>

                    {/**MEUTES CONTENT */}
                    <TabPane tabId="2" className="tab-pane fade show" id="pills-meutes" role="tabpanel" aria-labelledby="meutes-plans-tab">
                        
                        {/**MEUTE MISTRAL */}
                        <Row>
                            {/**TITLE */}
                            <Col md="12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Meute Mistral</h2>
                                    </div>
                                </div>
                            </Col>

                            {/**CHEFTAINE MEUTE MISTRAL */}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Cheftaine</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                                    <img src="assets/images/maitrise/emma-zovighian.JPG" alt="" className="img-d img-fluid"/>
                                                </div>
                                        <div className="card-overlay card-overlay-hover">

                                            <div className="card-header-d">
                                                <div className="card-title-d align-self-center">
                                                    <h3 className="title-d">
                                                        <a href="agent-single.html" className="link-two">Emmanuelle Zovighian</a>
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="card-body-d">
                                                <p className="content-d color-text-a">
                                                    dite Cobaye Radieux
                                                </p>
                                                <div className="info-agents color-a">
                                                    <p>
                                                        <strong>Phone: </strong> +961 76 536 273
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> emmazovighian@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Col>

                            {/**ASSISTANTE MEUTE MISTRAL */}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Assitante</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/sarah-chidiac.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Sarah Chidiac</a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 76 605 030
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> sarahchidiac@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                        </Row>

                        <br/><br/>

                        {/**MEUTE MAGMA*/}
                        <Row>
                            {/**TITLE */}
                            <Col md="12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Meute Magma</h2>
                                    </div>
                                </div>
                            </Col>

                            {/**CHEFTAINE MEUTE MISTRAL */}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Cheftaine</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                                    <img src="assets/images/maitrise/jana-adaimy.JPG" alt="" className="img-d img-fluid"/>
                                                </div>
                                        <div className="card-overlay card-overlay-hover">

                                            <div className="card-header-d">
                                                <div className="card-title-d align-self-center">
                                                    <h3 className="title-d">
                                                        <a href="agent-single.html" className="link-two">Jana Adaimy</a>
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="card-body-d">
                                                <p className="content-d color-text-a">
                                                    dite Tursiops Fanatic
                                                </p>
                                                <div className="info-agents color-a">
                                                    <p>
                                                        <strong>Phone: </strong> +961 70 440 655
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> janaadaimy@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Col>

                            {/**ASSISTANTE MEUTE MISTRAL */}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Assitante</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/marielle-fahed.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Marielle Fahed</a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dite Xerus Hardie
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 76 493 386
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> mariellefahed@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                        </Row>

                        <br/><br/>

                        {/**MEUTE BLIZZARD */}
                        <Row>
                            {/**TITLE */}
                            <Col md="12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Meute Blizzard</h2>
                                    </div>
                                </div>
                            </Col>

                            {/**CHEFTAINE MEUTE BLIZZARD */}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Cheftaine</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                                    <img src="assets/images/maitrise/anna-kamar.jpg" alt="" className="img-d img-fluid"/>
                                                </div>
                                        <div className="card-overlay card-overlay-hover">

                                            <div className="card-header-d">
                                                <div className="card-title-d align-self-center">
                                                    <h3 className="title-d">
                                                        <a href="agent-single.html" className="link-two">Anna Kamar</a>
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="card-body-d">
                                                <p className="content-d color-text-a">
                                                    dite Nagor Consciencieuse
                                                </p>
                                                <div className="info-agents color-a">
                                                    <p>
                                                        <strong>Phone: </strong> +961 71 108 048
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> anthony@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Col>
                        
                        </Row>

                    </TabPane>

                    {/**TROUPES CONTENT */}
                    <TabPane tabId="3" className="tab-pane fade show" id="pills-troupes" role="tabpanel" aria-labelledby="troupes-plans-tab">
                        
                        {/**TROUPE CASCADE*/}
                        <Row>
                            {/**TITLE */}
                            <Col md="12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Troupe Cascade</h2>
                                    </div>
                                </div>
                            </Col>

                            {/**CHEFTAINE TROUPE CASCADE*/}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Cheftaine</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/samantha-elkhoury.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">

                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Samantha el Khoury</a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dite Chickaree Enthousiaste
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 76 091 827
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> samanthaelkhoury@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            {/**ASSISTANTE TROUPE CASCADE*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Assitante</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/nour-haddad.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Nour Haddad</a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dite Manati Diligente
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 3 017 669
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> nourhaddad@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                            {/**ASSISTANTE TROUPE CASCADE*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Assitante</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/cynthia-mnayar.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Cynthia Mnayar</a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dite Chacma Enigmatique
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 71 064 010
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> cynthiamnayar@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>


                        </Row>

                        <br/><br/>

                        {/**TROUPE ETOILE*/}
                        <Row>
                            {/**TITLE */}
                            <Col md="12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Troupe Etoile</h2>
                                    </div>
                                </div>
                            </Col>

                            {/**CHEF TROUPE ETOILE*/}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Chef</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                                    <img src="assets/images/maitrise/rudy-badawi.JPG" alt="" className="img-d img-fluid"/>
                                                </div>
                                        <div className="card-overlay card-overlay-hover">

                                            <div className="card-header-d">
                                                <div className="card-title-d align-self-center">
                                                    <h3 className="title-d">
                                                        <a href="agent-single.html" className="link-two">Rudy Badawi</a>
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="card-body-d">
                                                <p className="content-d color-text-a">
                                                    dit Alouatta Fiable
                                                </p>
                                                <div className="info-agents color-a">
                                                    <p>
                                                        <strong>Phone: </strong> +961 71 451 045
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> rudybadawi@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Col>

                            {/**ASSISTANT TROUPE ETOILE*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Assitant</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/carl-saad.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Carl Saad</a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dit Hyrax Inventif
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 70 591 722
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> carlsaad@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                            {/**ASSISTANT TROUPE ETOILE*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Assitant</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/michel-saloume.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Michel Saloumi</a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dit Beringues Humble
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 71 511 357
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> michelsaloumi@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                        </Row>

                        <br/><br/>

                        {/**TROUPE SOURCE*/}
                        <Row>
                            {/**TITLE */}
                            <Col md="12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Troupe Source</h2>
                                    </div>
                                </div>
                            </Col>

                            {/**CHEF TROUPE SOURCE*/}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Chef</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                                    <img src="assets/images/maitrise/jack-mouaykel.JPG" alt="" className="img-d img-fluid"/>
                                                </div>
                                        <div className="card-overlay card-overlay-hover">

                                            <div className="card-header-d">
                                                <div className="card-title-d align-self-center">
                                                    <h3 className="title-d">
                                                        <a href="agent-single.html" className="link-two">Jack Mouaykel</a>
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="card-body-d">
                                                <p className="content-d color-text-a">
                                                    dit Guanaco Hardi
                                                </p>
                                                <div className="info-agents color-a">
                                                    <p>
                                                        <strong>Phone: </strong> +961 76 711 213
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> jackmouaykel@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Col>
                        
                            {/**ASSISTANT TROUPE SOURCE*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Assitant</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/alexis-hajj.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Alexis Hajj</a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dit Atèles Débrouillard
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 78 844 635
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> alexishajj@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                            {/**ASSISTANT TROUPE SOURCE*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Assitant</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/charbel-abdallah.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Charbel Abdallah</a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dit Cariboux Fiable
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 71 733 046
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> charbelabdallah@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                        </Row>

                        <br/><br/>

                        {/**TROUPE FLAMME*/}
                        <Row>
                            {/**TITLE */}
                            <Col md="12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Troupe Flamme</h2>
                                    </div>
                                </div>
                            </Col>

                            {/**CHEF TROUPE FLAMME*/}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Chef</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                                    <img src="assets/images/maitrise/fayssal-balhawan.JPG" alt="" className="img-d img-fluid"/>
                                                </div>
                                        <div className="card-overlay card-overlay-hover">

                                            <div className="card-header-d">
                                                <div className="card-title-d align-self-center">
                                                    <h3 className="title-d">
                                                        <a href="agent-single.html" className="link-two">Fayssal Balhawan</a>
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="card-body-d">
                                                <p className="content-d color-text-a">
                                                    dit Aguarà Compétant
                                                </p>
                                                <div className="info-agents color-a">
                                                    <p>
                                                        <strong>Phone: </strong> +961 71 315 342
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> fayssalbalhawan@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Col>
                        
                            {/**ASSISTANT TROUPE FLAMME*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Assitant</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/mario-jreige.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Mario Jreige</a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dit Quokka Méthodique
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 3 764 336
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> mariojreige@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                            {/**ASSISTANT TROUPE FLAMME*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Assitant</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/michel-saliba.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Michel Saliba</a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dit Beringueï Fidèle
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 76 194 575
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> michelsaliba@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                        </Row>

                    </TabPane>

                    {/**CLANS CONTENT */}
                    <TabPane tabId="4" className="tab-pane fade show" id="pills-clans" role="tabpanel" aria-labelledby="clans-plans-tab">
                        {/**CLAN DES PIONNIERES*/}
                        <Row>
                            {/**TITLE */}
                            <Col md="12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Clan des Pionnières</h2>
                                    </div>
                                </div>
                            </Col>

                            {/**CHEFTAINE CLAN DES PIONNIERES*/}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Cheftaine</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                                    <img src="assets/images/maitrise/sara-naji.JPG" alt="" className="img-d img-fluid"/>
                                                </div>
                                        <div className="card-overlay card-overlay-hover">

                                            <div className="card-header-d">
                                                <div className="card-title-d align-self-center">
                                                    <h3 className="title-d">
                                                        Sara Naji
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="card-body-d">
                                                <p className="content-d color-text-a">
                                                    dite Antilop Cabrée
                                                </p>
                                                <div className="info-agents color-a">
                                                    <p>
                                                        <strong>Phone: </strong> +961 76 491 466
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> sara naji@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Col>

                            {/**CE CYCLONE*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">CE Cyclone</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/maria-salameh.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Maria Salameh
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dite Quokka Egaye
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 71 409 076
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> mariasalameh@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                            {/**CE AVALANCHE*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">CE Avalanche</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/mira-harik.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Mira Harik
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dite Gloutton Bien Veillante
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 76 016 380
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> frerejeanclaude@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>


                        </Row>

                        <br/><br/>

                        {/**CLAN DES ROUTIER*/}
                        <Row>
                            {/**TITLE */}
                            <Col md="12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Clan des Routiers</h2>
                                    </div>
                                </div>
                            </Col>

                            {/**CHEF CLAN DES ROUTIERS*/}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Chef</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                                    <img src="assets/images/maitrise/elie-feghali.JPG" alt="" className="img-d img-fluid"/>
                                                </div>
                                        <div className="card-overlay card-overlay-hover">

                                            <div className="card-header-d">
                                                <div className="card-title-d align-self-center">
                                                    <h3 className="title-d">
                                                        Elie Feghaly
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="card-body-d">
                                                <p className="content-d color-text-a">
                                                    dit Mangouste Courtois
                                                </p>
                                                <div className="info-agents color-a">
                                                    <p>
                                                        <strong>Phone: </strong> +961 70 365 969
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> eliefeghaly@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Col>

                            {/**CE ZENITH*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">CE Zénith</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/fadi-suidan.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fadi Suidan
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dit Oryx Cordial
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 70 992 314
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> fadisuidan@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                            {/**CE OURAGAN*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">CE Ouragan</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/eloy-nemer.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Eloy Nemer
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dit Fossa Syndiqué
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 71 788 493
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> eloynemer@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                            {/**CE PEGASE*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">CE Pégase</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/tarek-sukkar.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Tarek Sukkar
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dit Bush Dog Laborieux
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 81 784 771
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> tareksukkar@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                            {/**CE 109*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">CE 109</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/maitrise/walid-zakhour.JPG" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Walid Zakhour
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dit Bison Baraqué
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 71 496 467
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> walidzakhour@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                        </Row>

                    </TabPane>

                </TabContent>
                </div>
           
            <div>
                <br/><br/><br/>
            </div>

        </div>
    );

}

export default MaitriseTest;