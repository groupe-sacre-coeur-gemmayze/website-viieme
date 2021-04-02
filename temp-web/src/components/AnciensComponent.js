import React, { useState } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const carouselAnciens = [
    {
        src: 'assets/images/carousel/carousel-ouverture.png',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'assets/images/carousel/carousel-feu.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'assets/images/carousel/carousel-bp.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
  ];

  function Anciens (props) {

    return(
        <div>
            {/**PAGE TITLE AND REGISTRATION*/}
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        {/**PAGE TITLE */}
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Anciens</h1>
                            </div>
                        </div>
                        {/**STAY CONNECTED*/}
                        <div class="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="/anciens-form">
                                            Stay Conected &nbsp;
                                            <i class="fas fa-users"></i>
                                        </a>
                                    </li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </section>

            {/**CAROUSEL */}
            <UncontrolledCarousel items={carouselAnciens} />

            {/**TEXT INTRO */}
            <section className="news-single nav-arrow-b section-t3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="post-content color-text-a">
                                <p className="post-intro">
                                    Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur
                                    <strong>adipiscing</strong> elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                                </p>
                                <p>
                                    Proin eget tortor risus. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum
                                    porta. Pellentesque
                                    in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                    dui. Lorem ipsum dolor sit amet.
                                </p>
                                <p>
                                    Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac
                                    lectus. Curabitur
                                    non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Curabitur non
                                    nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada.
                                    Quisque velit nisi.
                                </p>
                                <blockquote class="blockquote">
                                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer class="blockquote-footer">
                                        <strong>Albert Vargas</strong>
                                        <cite title="Source Title">Author</cite>
                                    </footer>
                                </blockquote>
                                <p>
                                    Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit
                                    tortor eget felis
                                    porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**LATEST EVENTS */}
            <section className="news-grid grid">
                <div className="container">
                    {/**SECTION TITLE */}
                    <div className="row">
                        <div className="col-sm-12 section-t8">
                            <div className="col-md-12">
                                <div className="title-box-d">
                                    <h3 className="title-d">Latest Events</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**EVENTS LIST */}
                    <div className="row">
                        {/**EVENT */}
                        <div className="col-md-4">
                            <div className="card-box-b card-shadow news-box">
                                <div className="img-box-b">
                                    <img src="assets/images/meutes.png" alt="" className="img-b img-fluid"/>
                                </div>
                                <div className="card-overlay">
                                    <div className="card-header-b">
                                        <div className="card-category-b">
                                            <a href="#" className="category-b">Soirée</a>
                                        </div>
                                        <div className="card-title-b">
                                            <h2 className="title-2">
                                                <a href="blog-single.html">
                                                    Event Example
                                                </a>
                                            </h2>
                                        </div>
                                        <div className="card-date">
                                            <span className="date-b">18 Sep. 2017</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**EVENT */}
                        <div className="col-md-4">
                            <div className="card-box-b card-shadow news-box">
                                <div className="img-box-b">
                                    <img src="assets/images/meutes.png" alt="" className="img-b img-fluid"/>
                                </div>
                                <div className="card-overlay">
                                    <div className="card-header-b">
                                        <div className="card-category-b">
                                            <a href="#" className="category-b">Soirée</a>
                                        </div>
                                        <div className="card-title-b">
                                            <h2 className="title-2">
                                                <a href="blog-single.html">
                                                    Event Example
                                                </a>
                                            </h2>
                                        </div>
                                        <div className="card-date">
                                            <span className="date-b">18 Sep. 2017</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**EVENT */}
                        <div className="col-md-4">
                            <div className="card-box-b card-shadow news-box">
                                <div className="img-box-b">
                                    <img src="assets/images/meutes.png" alt="" className="img-b img-fluid"/>
                                </div>
                                <div className="card-overlay">
                                    <div className="card-header-b">
                                        <div className="card-category-b">
                                            <a href="#" className="category-b">Soirée</a>
                                        </div>
                                        <div className="card-title-b">
                                            <h2 className="title-2">
                                                <a href="blog-single.html">
                                                    Event Example
                                                </a>
                                            </h2>
                                        </div>
                                        <div className="card-date">
                                            <span className="date-b">18 Sep. 2017</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**EVENT */}
                        <div className="col-md-4">
                            <div className="card-box-b card-shadow news-box">
                                <div className="img-box-b">
                                    <img src="assets/images/meutes.png" alt="" className="img-b img-fluid"/>
                                </div>
                                <div className="card-overlay">
                                    <div className="card-header-b">
                                        <div className="card-category-b">
                                            <a href="#" className="category-b">Soirée</a>
                                        </div>
                                        <div className="card-title-b">
                                            <h2 className="title-2">
                                                <a href="blog-single.html">
                                                    Event Example
                                                </a>
                                            </h2>
                                        </div>
                                        <div className="card-date">
                                            <span className="date-b">18 Sep. 2017</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**EVENT */}
                        <div className="col-md-4">
                            <div className="card-box-b card-shadow news-box">
                                <div className="img-box-b">
                                    <img src="assets/images/meutes.png" alt="" className="img-b img-fluid"/>
                                </div>
                                <div className="card-overlay">
                                    <div className="card-header-b">
                                        <div className="card-category-b">
                                            <a href="#" className="category-b">Soirée</a>
                                        </div>
                                        <div className="card-title-b">
                                            <h2 className="title-2">
                                                <a href="blog-single.html">
                                                    Event Example
                                                </a>
                                            </h2>
                                        </div>
                                        <div className="card-date">
                                            <span className="date-b">18 Sep. 2017</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**EVENT */}
                        <div className="col-md-4">
                            <div className="card-box-b card-shadow news-box">
                                <div className="img-box-b">
                                    <img src="assets/images/meutes.png" alt="" className="img-b img-fluid"/>
                                </div>
                                <div className="card-overlay">
                                    <div className="card-header-b">
                                        <div className="card-category-b">
                                            <a href="#" className="category-b">Soirée</a>
                                        </div>
                                        <div className="card-title-b">
                                            <h2 className="title-2">
                                                <a href="blog-single.html">
                                                    Event Example
                                                </a>
                                            </h2>
                                        </div>
                                        <div className="card-date">
                                            <span className="date-b">18 Sep. 2017</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                
                    {/**PAGINATION */}
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="pagination-a">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabindex="-1">
                                            <span className="ion-ios-arrow-back"></span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item next">
                                        <a className="page-link" href="#">
                                            <span className="ion-ios-arrow-forward"></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Anciens;