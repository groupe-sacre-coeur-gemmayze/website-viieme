import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

function MeuteBlizzard (props) {

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
                                <h1 className="title-single">Meute Blizzard</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            {/**MEUTE MAGMA MEMBRE ET MAITRISE */}
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
                    {/**SIZAINE BLANCHE TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Sizaine Blanche
                        </NavLink>
                    </NavItem>
                    {/**SIZAINE X TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Sizaine X
                        </NavLink>
                    </NavItem>
                    {/**SIZAINE Y TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >
                            Sizaine Y
                        </NavLink>
                    </NavItem>
                    {/**SIZAINE Z TAB */}
                    <NavItem className="nav-item">
                        <NavLink
                            className={classnames({ active: activeTab === '5' })}
                            onClick={() => { toggle('5'); }}
                        >
                            Sizaine Z
                        </NavLink>
                    </NavItem>
                </Nav>

                {/**MEUTE MAGMA CONTENT */}
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
                                                        <strong>Email: </strong> cM@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Col>

                            {/**ACM */}
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

                        </Row>
                    </TabPane>

                    {/**SIZAINE BLANCHE */}
                    <TabPane tabId="2" className="tab-pane fade show" id="pills-meutes" role="tabpanel" aria-labelledby="meutes-plans-tab">
                        
                        <Row>

                            {/**SI */}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">SI</h2>
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
                                                    First Last B
                                                </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br/><br/>
                            </Col>

                            {/**SE */}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">SE</h2>
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
                                                    First Last B
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    First Last B
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    Fisrt Last B
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    Fisrt Last B
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    Fisrt Last B
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                        </Row>
                    </TabPane>
                    
                    {/**SIZAINE X */}
                    <TabPane tabId="3" className="tab-pane fade show" id="pills-meutes" role="tabpanel" aria-labelledby="meutes-plans-tab">
                        
                        <Row>

                            {/**SI */}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">SI</h2>
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
                                                    First Last X
                                                </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br/><br/>
                            </Col>

                            {/**SE */}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">SE</h2>
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
                                                    First Last X
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    First Last X
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    Fisrt Last X
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    Fisrt Last X
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    Fisrt Last X
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                        </Row>
                    </TabPane>

                    {/**SIZAINE Y */}
                    <TabPane tabId="4" className="tab-pane fade show" id="pills-meutes" role="tabpanel" aria-labelledby="meutes-plans-tab">
                        
                        <Row>

                            {/**SI */}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">SI</h2>
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
                                                    First Last Y
                                                </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br/><br/>
                            </Col>

                            {/**SE */}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">SE</h2>
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
                                                    First Last Y
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    First Last Y
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    Fisrt Last Y
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    Fisrt Last Y
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    Fisrt Last Y
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <br/><br/>
                            </Col>

                        </Row>
                    </TabPane>

                    {/**SIZAINE Z */}
                    <TabPane tabId="5" className="tab-pane fade show" id="pills-meutes" role="tabpanel" aria-labelledby="meutes-plans-tab">
                        
                        <Row>

                            {/**SI */}
                            <Col md="4">        
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">SI</h2>
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
                                                    First Last Z
                                                </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br/><br/>
                            </Col>

                            {/**SE */}
                            <Col md="4">                
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className=" title-a">SE</h2>
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
                                                    First Last Z
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    First Last Z
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    Fisrt Last Z
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    Fisrt Last Z
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
                                        <h2 className=" title-a">Membre</h2>
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
                                                    Fisrt Last Z
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

export default MeuteBlizzard;