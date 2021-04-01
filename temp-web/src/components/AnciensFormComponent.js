import React from 'react';
import { Col, Row, Form, FormGroup } from 'reactstrap';

function AnciensForm (props) {
    return(
        <div>
            {/**PAGE TITLE */}
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Stay Connected</h1>
                                <span>Restez connecter avec nous... <br/>
                                    Les informations fournies sont strictement 
                                    confidentielles et ne seront partagées 
                                    avec aucune partie externe.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**FORM */}
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-md-12">
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
                                                    <input className="form-control form-control-lg form-control-a" type="text" placeholder="Numéro de Téléphone" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6} className="col-md-6 mb-3">
                                                <FormGroup className="form-group">
                                                    <input className="form-control form-control-lg form-control-a" type="text" placeholder="Numéro Scoute (Si disponible)" />
                                                </FormGroup>
                                            </Col>
                                                <Col md={12} className="col-md-12 mb-3">
                                                  <div className="form-group">
                                                    <input className="form-control form-control-lg form-control-a" type="text" placeholder="Email" />
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

export default AnciensForm;