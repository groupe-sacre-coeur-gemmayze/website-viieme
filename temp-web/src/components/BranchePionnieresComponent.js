import React from 'react';

function BranchePionnieres(props) {
    return(
        <div>
            {/**PAGE TITLE */}
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Branche Pionnières</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**IMAGE AND METHODE */}
            <section className="section-about">
                <div className="container">
                    <div className="row">
                        {/**IMAGE AND TEXT BOX */}
                        <div className="col-sm-12">
                            {/**IMAGE */}
                            <div className="about-img-box">
                                <img src="assets/images/branches/head-clans.jpg" alt="" class="img-fluid"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

        </div>
    );
}

export default BranchePionnieres;