import React from 'react';

function BrancheEclaireurs(props) {
    return(
        <div>
            {/**PAGE TITLE */}
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Branche Eclaireurs</h1>
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
                                <img src="assets/images/branches/head-eclaireurs.jpg" alt="" class="img-fluid"/>
                            </div>
                        </div>
                        
                        {/**LA METHODE */}
                        <div className="col-md-12 section-t3">
                            <div className="row">
                                {/**LA TROUPE */}
                                <div className="col-md-12 col-lg-12 section-md-t3">
                                    {/**TITLE */}
                                    <div className="title-box-d">
                                        <h3 className="title-d">
                                            La Troupe
                                        </h3>
                                    </div>
                                    {/**TEXT */}
                                    <p className="color-text-a">
                                        Plusieurs patrouilles de 6 à 8 éclaireurs forment la troupe.
                                        <br/><br/>
                                        Le chef de troupe avec ses assistants dirigent la troupe qui 
                                        se réunit périodiquement dans des activités, jeux, camps et 
                                        aventures dont le but est d’aider le scout à grandir dans un 
                                        environnement sain en vivant les valeurs scoutes (la fidélité, 
                                        la confiance, le respect, le partage, la discipline,…) 
                                        et à s’engager à travers la loi et la promesse scoutes.
                                    </p>
                                </div>

                                {/**LA PATROUILLE */}
                                <div className="col-md-12 col-lg-12 section-t3">
                                    {/**TITLE */}
                                    <div className="title-box-d">
                                        <h3 className="title-d">
                                            La Patrouille
                                        </h3>
                                    </div>
                                    {/**TEXT */}
                                    <p className="color-text-a">
                                    La patrouille est un groupe de copains liés par les mêmes 
                                    préoccupations et la même fraternité. Le but principal du 
                                    système des patrouilles est de donner une véritable 
                                    responsabilité au plus grand nombre possible de garçons, 
                                    pour leur développer le caractère. Chaque patrouille a 
                                    ses propres traditions: un chant, le cri, une activité, 
                                    les spécialités…
                                    <br/><br/>
                                    La patrouille est dirigée par le chef de patrouille qui 
                                    est nommé par le chef de troupe et est aidé par le second 
                                    de patrouille. Le CP est l’ami et le grand frère des membres 
                                    de la patrouille. Il doit encourager les éclaireurs à prendre 
                                    plus de responsabilités et cela pour le bon fonctionnement de 
                                    la patrouille.
                                    <br/><br/>
                                    La patrouille doit se réunir d’une façon régulière. 
                                    Durant la réunion, chaque éclaireur partagera ses idées 
                                    et ses suggestions et toutes les activités de patrouille 
                                    seront décidées durant cette réunion.
                                    </p>
                                </div>

                                {/**LA PROGRESSION A LA TROUPE */}
                                <div className="col-md-12 col-lg-12 section-t3">
                                    {/**TITLE */}
                                    <div className="title-box-d">
                                        <h3 className="title-d">
                                            La Progression a la troupe
                                        </h3>
                                    </div>
                                    {/**TEXT */}
                                    <p className="color-text-a">
                                    Qu’il soit un aspirant ou un CP, la progression de 
                                    l’éclaireur ne s’arrête pas. La promesse, la seconde classe, 
                                    la première classe et les badges contiennent des épreuves 
                                    pour aider un scout à se développer et progresser au sein 
                                    de la patrouille et la troupe.
                                    <br/><br/>
                                    L’expression, la découverte, le sport, la vie dans la nature 
                                    et la technique, plusieurs catégories de badges à choisir selon 
                                    les compétences de chaque éclaireur.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**LES TROUPES SECTION */}
            <section className="agent-single">
                <div className="container">
                    <div className="row">
                        {/**LES TROUPES TITLE */}
                        <div className="col-md-12 section-t8">
                            <div className="title-box-d">
                                <h3 className="title-d">Les Troupes</h3>
                            </div>
                        </div>
                        
                        {/**TROUPE ETOILE */}
                        <div class="col-md-4">
                            <a href="troupe-etoile">
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
                                                    Troupe
                                                    <br /> Etoile
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/**TROUPE SOURCE */}
                        <div class="col-md-4">
                            <a href="troupe-source">
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
                                                    Troupe
                                                    <br /> Source
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/**TROUPE FLAMME */}
                        <div class="col-md-4">
                            <a href="troupe-flamme">
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
                                                    Troupe
                                                    <br /> Flamme
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

export default BrancheEclaireurs;