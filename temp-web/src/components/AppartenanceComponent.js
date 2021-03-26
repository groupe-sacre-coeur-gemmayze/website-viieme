import React from 'react';
import { Media } from 'reactstrap';

function Appartenance(props) {
    return(
        <div>
            {/**PAGE TITLE */}
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Appartenance</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**APPARTENANCE SECTION */}
            <section className="agent-single">
                <div className="container">
                    <div className="row">

                        {/**SDL */}
                        <div className="col-sm-12 section-t3">
                            <div className="row">
                                {/**IMAGE SDL */}
                                <div className="col-md-6">
                                    <div className="agent-avatar-box text-center">
                                        <img src="assets/images/appartenance/logo-sdl-ver.png" width="40%" className="agent-avatar img-fluid" />
                                    </div>
                                </div>
                                {/**SDL TEXT */}
                                <div className="col-md-5 sectionmd-t3">
                                    <div className="agent-info-box">
                                        {/**SDL TITLE */}
                                        <div className="agent-title">
                                            <div className="title-box-d">
                                                <h3 className="title-d">
                                                    Les Scouts du Liban
                                                </h3>
                                            </div>
                                        </div>
                                        {/**TEXT AND PHONE */}
                                        <div className="agent-content mb-3">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                                                Vivamus suscipit tortor
                                                eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong>
                                                    <span className="color-text-a">+961 123 456</span>
                                                </p>
                                                <p>
                                                    <strong>Email: </strong>
                                                    <span className="color-text-a">sdl@sdl.com</span>
                                                </p>
                                            </div>
                                        </div>
                                        {/**SOCIALS FOOTER */}
                                        <div className="social-footer">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a href="#" className="link-one">
                                                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#" className="link-one">
                                                        <i className="fab fa-instagram" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/**CSC */}
                        <div className="col-sm-12 section-t3">
                            <div className="row">
                                {/**IMAGE SDL */}
                                <div className="col-md-6">
                                    <div className="agent-avatar-box text-center">
                                        <img src="assets/images/appartenance/csc-logo.png" className="agent-avatar img-fluid" />
                                    </div>
                                </div>
                                {/**SDL TEXT */}
                                <div className="col-md-5 sectionmd-t3">
                                    <div className="agent-info-box">
                                        {/**SDL TITLE */}
                                        <div className="agent-title">
                                            <div className="title-box-d">
                                                <h3 className="title-d">
                                                    Collège du Sacré-Coeur Gemmayzé
                                                </h3>
                                            </div>
                                        </div>
                                        {/**TEXT AND PHONE */}
                                        <div className="agent-content mb-3">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                                                Vivamus suscipit tortor
                                                eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong>
                                                    <span className="color-text-a">+961 123 456</span>
                                                </p>
                                                <p>
                                                    <strong>Email: </strong>
                                                    <span className="color-text-a">sdl@sdl.com</span>
                                                </p>
                                            </div>
                                        </div>
                                        {/**SOCIALS FOOTER */}
                                        <div className="social-footer">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a href="#" className="link-one">
                                                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#" className="link-one">
                                                        <i className="fab fa-instagram" aria-hidden="true"></i>
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

            </section>

        </div>
    );
}

export default Appartenance;