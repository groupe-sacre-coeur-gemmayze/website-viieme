import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

function TroupeCascade (props) {

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
                                <h1 className="title-single">Troupe Cascade</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            {/**TROUPE FLAMME MEMBRE ET MAITRISE */}
            <div className="col-md-10 offset-md-1">
                {/**TAB BAR */}
                <Nav className="nav nav-pills-a nav-pills mb-3" id="pills-tab" role="tablist">
                    {/**MAITRISE TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            La Maîtrise
                        </NavLink>
                    </NavItem>
                    {/**PATROUILLE DES FENNECS TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Patrouille des Fennecs
                        </NavLink>
                    </NavItem>
                    {/**PATROUILLE DES PANDAS TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Patrouille des Pandas
                        </NavLink>
                    </NavItem>
                    {/**PATROUILLE DES CERFS TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >
                            Patrouille des Cerfs
                        </NavLink>
                    </NavItem>
                    {/**PATROUILLE DES PINSONS TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '5' })}
                            onClick={() => { toggle('5'); }}
                        >
                            Patrouille des Pinsons
                        </NavLink>
                    </NavItem>
                </Nav>

                {/**TROUPE CASCADE CONTENT */}
                <TabContent activeTab={activeTab} className="tab-content" id="pills-tabContent">
                    {/**MAITRISE CONTENT */}
                    <TabPane tabId="1" className="tab-pane fade show" id="pills-mdg" role="tabpanel" aria-labelledby="pills-mdg-tab">
                        <Row>
                            {/**CHEFTAINE */}
                            <Col md="4" sm="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Cheftaine</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First <br/> Last
                                                </h3>
                                            </div>
                                        </div>

                                            <div className="card-body-d">
                                                <p className="content-d color-text-a">
                                                    dite Example Example
                                                </p>
                                                <div className="info-agents color-a">
                                                    <p>
                                                        <strong>Phone: </strong> +961 123 456
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> ct@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Col>

                            {/**ACT */}
                            <Col md="4" sm="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Assitante</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First <br/> Last
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                dite Example Example
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +961 123 456
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> act1@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </Col>

                            {/**ACT */}
                            <Col md="4" sm="4">                                         
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Assistante</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>

                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt <br/> Last
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                    dite Example Example
                                                </p>
                                            <div className="info-agents color-a">
                                                    <p>
                                                        <strong>Phone: </strong> +961 123 456
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> act2@example.com
                                                    </p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </TabPane>

                    {/**FENNECS */}
                    <TabPane tabId="2" className="tab-pane fade show" id="pills-meutes" role="tabpanel" aria-labelledby="meutes-plans-tab">
                        
                        <Row>

                            {/**CP */}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">CP</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">

                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First Last F
                                                </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br/><br/>
                            </Col>

                            {/**SP */}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">SP</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First Last F
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                                <br/><br/>
                            </Col>

                            {/**Membre 1*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First Last F
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>
                            </Col>

                            {/**Membre 2*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt Last F
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                            {/**Membre 3*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt Last F
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                            {/**Membre 4*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt Last F
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                        </Row>
                    </TabPane>
                    
                    {/**PANDAS */}
                    <TabPane tabId="3" className="tab-pane fade show" id="pills-meutes" role="tabpanel" aria-labelledby="meutes-plans-tab">
                        
                        <Row>

                            {/**CP */}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">CP</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">

                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First Last P
                                                </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br/><br/>
                            </Col>

                            {/**SP */}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">SP</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First Last P
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                                <br/><br/>
                            </Col>

                            {/**Membre 1*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First Last P
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>
                            </Col>

                            {/**Membre 2*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt Last P
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                            {/**Membre 3*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt Last P
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                            {/**Membre 4*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt Last P
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                        </Row>
                    </TabPane>

                    {/**CERFS */}
                    <TabPane tabId="4" className="tab-pane fade show" id="pills-meutes" role="tabpanel" aria-labelledby="meutes-plans-tab">
                        
                        <Row>

                            {/**CP */}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">CP</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">

                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First Last C
                                                </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br/><br/>
                            </Col>

                            {/**SP */}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">SP</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First Last C
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                                <br/><br/>
                            </Col>

                            {/**Membre 1*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First Last C
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>
                            </Col>

                            {/**Membre 2*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt Last C
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                            {/**Membre 3*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt Last C
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                            {/**Membre 4*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt Last C
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                        </Row>
                    </TabPane>

                    {/**PINSONS */}
                    <TabPane tabId="5" className="tab-pane fade show" id="pills-meutes" role="tabpanel" aria-labelledby="meutes-plans-tab">
                        
                        <Row>

                            {/**CP */}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">CP</h2>
                                    </div>
                                </div>
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">

                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First Last P
                                                </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br/><br/>
                            </Col>

                            {/**SP */}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">SP</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First Last P
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                                <br/><br/>
                            </Col>

                            {/**Membre 1*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    First Last P
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>
                            </Col>

                            {/**Membre 2*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt Last P
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                            {/**Membre 3*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt Last P
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                            {/**Membre 4*/}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">Patrouillard</h2>
                                    </div>
                                </div>
                                
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/images/agent-6.jpg" alt="" className="img-d img-fluid"/>
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    Fisrt Last P
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                        </Row>
                    </TabPane>

                </TabContent>
            </div>

        
        </div>
    );

}

export default TroupeCascade;