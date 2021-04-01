import React, { Component } from 'react';
import { Button, Label, Col, Row, Form, FormGroup } from 'reactstrap';

class Contact extends Component {


    render() {
        return(
            <div>
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">Contactez-nous</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact">
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12">
                                <div className="row">

                                    {/**GOOGLE MAPS */}
                                    <div className="col-md-7">
                                        <div className="contact-map box">
                                            <div id="map" className="contact-map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.7496953955265!2d35.50919107372205!3d33.89609973206593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f16e4dae7bde5%3A0xa81b598d407bd01!2zQ29sbMOoZ2UgU2FjcsOpLUPFk3VyIEdlbW1heXplaA!5e0!3m2!1sen!2slb!4v1615971796776!5m2!1sen!2slb" width="100%" height="450" frameborder="0" allowfullscreen="" loading="lazy"></iframe>                                        </div>
                                        </div>
                                    </div>

                                    {/**CONTACT CARD */}
                                    <div className="col-md-5 section-md-t3">

                                        {/**SAY HELLO */}
                                        <div className="icon-box section-b2">
                                            <div className="icon-box-icon">
                                                <span className="fa fa-phone"></span>
                                            </div>
                                            <div className="icon-box-content table-cell">
                                                <div className="icon-box-title">
                                                    <h4 className="icon-title">Say Hello</h4>
                                                </div>
                                                <div className="icon-box-content">
                                                    <p className="mb-1">
                                                        Email. 
                                                        <span className="color-a">contact@example.com</span>
                                                    </p>
                                                    <p className="mb-1">
                                                        Phone. <span className="color-a">+123456</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/**LOCATION */}
                                        <div className="icon-box section-b2">
                                            <div className="icon-box-icon">
                                                <span className="fa fa-map-marker"></span>
                                            </div>
                                            <div className="icon-box-content table-cell">
                                                <div className="icon-box-title">
                                                    <h4 className="icon-title">Find us in</h4>
                                                </div>
                                                <div className="icon-box-content">
                                                    <p className="mb-1">
                                                        Collège du Sacré-Coeur Gemmayzé
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/**SOCIAL NETWORKS */}
                                        <div className="icon-box">
                                            <div className="icon-box-icon">
                                                <span className="fa fa-share-square"></span>
                                            </div>
                                            <div className="icon-box-content table-cell">
                                                <div className="icon-box-title">
                                                    <h4 className="icon-title">Social Networks</h4>
                                                </div>
                                                <div className="icon-box-content">
                                                    <div className="socials-footer">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <a className="link-one" href="https://www.facebook.com/sdlgroupesacrecoeurgemmayze/" target="blank">
                                                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="link-one" href="https://www.instagram.com/sdl_grpsacrecoeurgemmayze/" target="blank">
                                                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="link-one" href="https://www.instagram.com/sdl_grpsacrecoeurgemmayze/" target="blank">
                                                                    <i className="fab fa-youtube" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="link-one" href="https://www.instagram.com/sdl_grpsacrecoeurgemmayze/" target="blank">
                                                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-12 section-t8">
                                <div className="row">
                                    
                                    {/**INSCRIPTION */}
                                    <div className="col-md-12">
                                        {/**TITLE */}
                                        <div className="title-box-d">
                                            <h3 className="title-d">Inscrivez-vous</h3>
                                        </div>

                                        {/**FORM */}
                                        <Form model="feedback" className="php-email-form">
                                            <Row className="row">
                                                <Col md={6} className="col-md-6 mb-3">
                                                    <FormGroup className="form-group">
                                                        <input className="form-control form-control-lg form-control-a" type="text" placeholder="Prénom" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6} className="col-md-6 mb-3">
                                                    <FormGroup className="form-group">
                                                        <input className="form-control form-control-lg form-control-a" type="text" placeholder="Nom" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6} className="col-md-6 mb-3">
                                                    <FormGroup className="form-group">
                                                        <input className="form-control form-control-lg form-control-a" type="text" placeholder="Age" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6} className="col-md-6 mb-3">
                                                    <FormGroup className="form-group">
                                                        <input className="form-control form-control-lg form-control-a" type="text" placeholder="Classe" />
                                                    </FormGroup>
                                                </Col>

                                                <Col md={12} className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input className="form-control form-control-lg form-control-a" type="text" placeholder="Numéro de Téléphone" />
                                                    </div>
                                                </Col> 
                                                <Col md={12} className="col-md-12 text-center">
                                                    <button type="submit" className="btn btn-a">Submit</button>
                                                </Col>
        

                                            </Row>

                                        </Form>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default Contact;