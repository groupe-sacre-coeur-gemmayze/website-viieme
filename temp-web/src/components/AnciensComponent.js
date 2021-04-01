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
            {/**PAGE TITLE */}
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Anciens</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**CAROUSEL */}
            <UncontrolledCarousel items={carouselAnciens} />

        </div>
    );
}

export default Anciens;