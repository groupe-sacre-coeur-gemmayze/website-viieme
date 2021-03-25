import React, {Component, useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, 
    Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Button,
    Modal, FormGroup, Label, Input, ModalBody, ModalHeader, Form,
    UncontrolledAlert, UncontrolledDropdown} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render(){
        return(
            <React.Fragment>
                <Navbar expand="md" className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                    <div className="container">
                        <NavbarToggler className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleNav}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </NavbarToggler>
                        
                        <NavbarBrand className="mx-auto navbar-brand" href="/">
                            <img src="assets/images/viieme-logo.png" height="100" alt="Logo VIIème" />
                        </NavbarBrand>

                        <button onClick={this.toggleModal} type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
                            <span className="fa fa-user" aria-hidden="true"></span>
                        </button>

                        <Collapse className="navbar-collapse collapse justify-content-center" id="navbarDefault" isOpen={this.state.isNavOpen} navbar>
                            <Nav className="navbar-nav">
                                {/**ACCEUIL */}
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/home">
                                        <span>Accueil</span>
                                    </NavLink>
                                </NavItem>
                                {/**A PROPOS */}
                                <NavItem className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        A Propos
                                    </NavLink>
                                    <NavItem className="dropdown-menu">
                                        <NavLink to="/histoire" className="dropdown-item">Histoire</NavLink>
                                        <NavLink to="/methode" className="dropdown-item">Méthode</NavLink>
                                        <NavLink to="/appartenance" className="dropdown-item">Appartenance</NavLink>
                                        <NavLink to="/publications" className="dropdown-item">Nos Publications</NavLink>
                                        <NavLink to="/maitrise" className="dropdown-item">La Maîtrise</NavLink>
                                    </NavItem>
                                </NavItem>
                                {/**ACTIVITES */}
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/activites">
                                        <span>Activités</span>
                                    </NavLink>
                                </NavItem>
                                {/**ANCIENS */}
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/anciens">
                                        <span>Anciens</span>
                                    </NavLink>
                                </NavItem>
                                {/**BRANCHES */}
                                <NavItem className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="/branches" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Branches
                                    </NavLink>
                                    <NavItem className="dropdown-menu">
                                        <NavLink to="/louvettes" className="dropdown-item">Louvettes</NavLink>
                                        <NavLink to="/louveteaux" className="dropdown-item">Louveteaux</NavLink>
                                        <NavLink to="/eclaireuses" className="dropdown-item">Eclaireuses</NavLink>
                                        <NavLink to="/eclaireurs" className="dropdown-item">Eclaireurs</NavLink>
                                        <NavLink to="/pionnieres" className="dropdown-item">Pionnières</NavLink>
                                        <NavLink to="/routiers" className="dropdown-item">Route</NavLink>
                                    </NavItem>
                                </NavItem>
                                {/**CONTACT */}
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/contact">
                                        <span>Contactez-nous</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>

                        <button onClick={this.toggleModal} type="button" className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
                        <span class="fa fa-user" aria-hidden="true"></span>
                        </button>
                        
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                    <ModalBody>
                        <div className="title-box-d" toggle={this.toggleModal}>
                            <h3 class="title-d">Welcome Back</h3>
                        </div>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <div class="col-md-12">
                                <button type="submit" className="btn btn-b">Login</button>
                            </div>
                        </Form>
                        <hr></hr>
                        <h4>Or Sign Up</h4>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;