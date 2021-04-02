import React from 'react';

function BrancheRoute(props) {
    return(
        <div>
            {/**PAGE TITLE */}
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Branche Route</h1>
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
                        
                        {/**LA METHODE */}
                        <div className="col-md-12 section-t3">
                            <div className="row">
                                {/**LE CLAN */}
                                <div className="col-md-12 col-lg-12 section-md-t3">
                                    {/**TITLE */}
                                    <div className="title-box-d">
                                        <h3 className="title-d">
                                            Le Clan
                                        </h3>
                                    </div>
                                    {/**TEXT */}
                                    <p className="color-text-a">
                                        Plusieurs patrouilles de 6 à 8 éclaireurs forment la troupe.
                                        <br/><br/>
                                        La cheftaine de troupe avec ses assistantes dirigent la troupe 
                                        qui se réunit périodiquement dans des activités, jeux, camps 
                                        et aventures dont le but est d’aider la scoute à grandir dans 
                                        un environnement sain en vivant les valeurs scoutes (la fidélité,
                                         la confiance, le respect, le partage, la discipline,…) 
                                         et à s’engager à travers la loi et la promesse scoutes.
                                    </p>
                                </div>

                                {/**LA PROGRESSION AU CLAN*/}
                                <div className="col-md-12 col-lg-12 section-t3">
                                    {/**TITLE */}
                                    <div className="title-box-d">
                                        <h3 className="title-d">
                                            La Progression au clan
                                        </h3>
                                    </div>
                                    {/**TEXT */}
                                    <p className="color-text-a">
                                    Qu’elle soit une aspirante ou une CP, la progression de
                                     l’éclaireuse ne s’arrête pas. La promesse, la seconde classe, 
                                     la première classe et les badges contiennent des épreuves 
                                     pour aider une scoute à se développer et progresser au sein 
                                     de la patrouille et la troupe.
                                    <br/><br/>
                                    L’expression, la découverte, le sport, la vie dans la nature 
                                    et la technique, plusieurs catégories de badges à choisir 
                                    selon les compétences de chaque éclaireuse.
                                    </p>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </section>

            {/**LE CLAN SECTION */}
            <section className="agent-single">
                <div className="container">
                    <div className="row">
                        {/**LE CLAN TITLE */}
                        <div className="col-md-12 section-t8">
                            <div className="title-box-d">
                                <h3 className="title-d">Le Clan</h3>
                            </div>
                        </div>
                        
                        {/**CLAN DES ROUTIERS */}
                        <div class="col-md-4">
                            <a href="clan-des-routiers">
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
                                                    Clan des
                                                    <br /> Routiers
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </section>



        </div>
    );
}

export default BrancheRoute;