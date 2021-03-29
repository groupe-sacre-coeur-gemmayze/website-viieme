import React from 'react';

function Branches (props) {
    return(
        <div>
            <section class="intro-single">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-8">
                            <div class="title-single-box">
                                <h1 class="title-single">Les Branches</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="property-grid grid">
                <div class="container">
                    <div class="row">

                        {/**BRANCHES LOUVETTES */}
                        <div class="col-md-4">
                            <div class="card-box-a card-shadow">
                                {/**IMAGE BOX */}
                                <div class="img-box-a">
                                    <img src="assets/images/meutes.png" alt="" class="img-a img-fluid"/>
                                </div>
                                {/**CARD OVERLAY */}
                                <div class="card-overlay">
                                    <div class="card-overlay-a-content">
                                        {/**CARD HEADER */}
                                        <div class="card-header-a">
                                            <h2 class="card-title-a">
                                                <a href="louvettes">Branche
                                                <br /> Louvettes</a>
                                            </h2>
                                        </div>
                                        {/**CARD BODY */}
                                        <div class="card-body-a">
                                            <div class="price-box d-flex">
                                                <span class="price-a">8 à 12 ans</span>
                                            </div>
                                        </div>
                                        {/**CARD FOOTER */}
                                        <div class="card-footer-a">
                                            <ul class="card-info d-flex justify-content-around">
                                                <li><a href="meute-mistral">
                                                    <h4 class="card-info-title">Meute</h4>
                                                    <span>Mistral</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/**BRANCHES ECLAIREUSES */}
                        <div class="col-md-4">
                            <div class="card-box-a card-shadow">
                                {/**IMAGE BOX */}
                                <div class="img-box-a">
                                    <img src="assets/images/troupes.png" alt="" class="img-a img-fluid"/>
                                </div>
                                {/**CARD OVERLAY */}
                                <div class="card-overlay">
                                    <div class="card-overlay-a-content">
                                        {/**CARD HEADER */}
                                        <div class="card-header-a">
                                            <h2 class="card-title-a">
                                                <a href="eclaireuses">Branche 
                                                <br />Eclaireuses</a>
                                            </h2>
                                        </div>
                                        {/**CARD BODY */}
                                        <div class="card-body-a">
                                            <div class="price-box d-flex">
                                                <span class="price-a">12 à 17 ans</span>
                                            </div>
                                        </div>
                                        {/**CARD FOOTER */}
                                        <div class="card-footer-a">
                                            <ul class="card-info d-flex justify-content-around">
                                                <li><a href="troupe-cascade">
                                                    <h4 class="card-info-title">Troupe</h4>
                                                        <span>Cascade
                                                    </span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/**BRANCHES PIONNIERES */}
                        <div class="col-md-4">
                            <div class="card-box-a card-shadow">
                                {/**IMAGE BOX */}
                                <div class="img-box-a">
                                    <img src="assets/images/routiers.png" alt="" class="img-a img-fluid"/>
                                </div>
                                {/**CARD OVERLAY */}
                                <div class="card-overlay">
                                    <div class="card-overlay-a-content">
                                        {/**CARD HEADER */}
                                        <div class="card-header-a">
                                            <h2 class="card-title-a">
                                                <a href="pionnieres">Branche 
                                                <br />Pionnières</a>
                                            </h2>
                                        </div>
                                        {/**CARD BODY */}
                                        <div class="card-body-a">
                                            <div class="price-box d-flex">
                                                <span class="price-a">17 à 22 ans</span>
                                            </div>
                                        </div>
                                        {/**CARD FOOTER */}
                                        <div class="card-footer-a">
                                            <ul class="card-info d-flex justify-content-around">
                                                <li>
                                                    <h4 class="card-info-title">Equipe</h4>
                                                    <span>Cyclone</span>
                                                </li>
                                                <li>
                                                    <h4 class="card-info-title">Equipe</h4>
                                                    <span>Avalanche</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/**BRANCHES LOUVETEAUX */}
                        <div class="col-md-4">
                            <div class="card-box-a card-shadow">
                                {/**IMAGE BOX */}
                                <div class="img-box-a">
                                    <img src="assets/images/meutes.png" alt="" class="img-a img-fluid"/>
                                </div>
                                {/**CARD OVERLAY */}
                                <div class="card-overlay">
                                    <div class="card-overlay-a-content">
                                        {/**CARD HEADER */}
                                        <div class="card-header-a">
                                            <h2 class="card-title-a">
                                                <a href="louveteaux">Branche
                                                <br />Louveteaux</a>
                                            </h2>
                                        </div>
                                        {/**CARD BODY */}
                                        <div class="card-body-a">
                                            <div class="price-box d-flex">
                                                <span class="price-a">8 à 12 ans</span>
                                            </div>
                                        </div>
                                        {/**CARD FOOTER */}
                                        <div class="card-footer-a">
                                            <ul class="card-info d-flex justify-content-around">
                                                <li><a href="meute-blizzard">
                                                    <h4 class="card-info-title">Meute</h4>
                                                    <span>Blizzard</span></a>
                                                </li>
                                                <li><a href="meute-magma">
                                                    <h4 class="card-info-title">Meute</h4>
                                                    <span>Magma</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/**BRANCHES ECLAIREURS */}
                        <div class="col-md-4">
                            <div class="card-box-a card-shadow">
                                {/**IMAGE BOX */}
                                <div class="img-box-a">
                                    <img src="assets/images/troupes.png" alt="" class="img-a img-fluid"/>
                                </div>
                                {/**CARD OVERLAY */}
                                <div class="card-overlay">
                                    <div class="card-overlay-a-content">
                                        {/**CARD HEADER */}
                                        <div class="card-header-a">
                                            <h2 class="card-title-a">
                                                <a href="/eclaireurs">Branche 
                                                <br />Eclaireurs</a>
                                            </h2>
                                        </div>
                                        {/**CARD BODY */}
                                        <div class="card-body-a">
                                            <div class="price-box d-flex">
                                                <span class="price-a">12 à 17 ans</span>
                                            </div>
                                        </div>
                                        {/**CARD FOOTER */}
                                        <div class="card-footer-a">
                                            <ul class="card-info d-flex justify-content-around">
                                                <li><a href="troupe-flamme">
                                                    <h4 class="card-info-title">Troupe</h4>
                                                    <span>Flamme</span></a>
                                                </li>
                                                <li><a href="troupe-source">
                                                    <h4 class="card-info-title">Troupe</h4>
                                                    <span>Source</span></a>
                                                </li>
                                                <li><a href="troupe-etoile">
                                                    <h4 class="card-info-title">Troupe</h4>
                                                    <span>Etoile</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/**BRANCHES ROUTE */}
                        <div class="col-md-4">
                            <div class="card-box-a card-shadow">
                                {/**IMAGE BOX */}
                                <div class="img-box-a">
                                    <img src="assets/images/routiers.png" alt="" class="img-a img-fluid"/>
                                </div>
                                {/**CARD OVERLAY */}
                                <div class="card-overlay">
                                    <div class="card-overlay-a-content">
                                        {/**CARD HEADER */}
                                        <div class="card-header-a">
                                            <h2 class="card-title-a">
                                                <a href="routiers">Branche 
                                                <br />Route</a>
                                            </h2>
                                        </div>
                                        {/**CARD BODY */}
                                        <div class="card-body-a">
                                            <div class="price-box d-flex">
                                                <span class="price-a">17 à 22 ans</span>
                                            </div>
                                        </div>
                                        {/**CARD FOOTER */}
                                        <div class="card-footer-a">
                                            <ul class="card-info d-flex justify-content-around">
                                                <li>
                                                    <h4 class="card-info-title">Equipe</h4>
                                                    <span>Zénith</span>
                                                </li>
                                                <li>
                                                    <h4 class="card-info-title">Equipe</h4>
                                                    <span>Ouragan</span>
                                                </li>
                                                <li>
                                                    <h4 class="card-info-title">Equipe</h4>
                                                    <span>Pégase</span>
                                                </li>
                                                <li>
                                                    <h4 class="card-info-title">Equipe</h4>
                                                    <span>109</span>
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

export default Branches;