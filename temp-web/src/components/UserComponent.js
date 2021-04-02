import React from 'react';

function UserPage (props) {

    return(
        <div>
            {/**PAGE TITLE*/}
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">User Name</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**USER PICTURE AND GENERAL INFORMATION */}
            <section className="agent-single">
                <div className="container">
                    <div className="row">
                        {/**IMAGE AND INTRO TEXT */}
                        <div className="col-sm-12">
                            <div className="row">
                                {/**IMAGE */}
                                <div className="col-md-4">
                                    <div className="agent-avatar-box">
                                        <img src="assets/images/agent-6.jpg" alt="user picture" className="agent-avatar img-fluid"/>
                                    </div>
                                </div>
                                {/**NAME / INTRO TEXT */}
                                <div className="col-md-8 section-md-t3">
                                    <div className="agent-info-box">
                                        {/**NAME */}
                                        <div className="agent-title">
                                            <div className="title-box-d">
                                                <h3 className="title-d">
                                                    User Name
                                                </h3>
                                            </div>
                                        </div>
                                        {/**TEXT AND INFORMATION */}
                                        <div className="agent-content mb-3">
                                            {/**TEXT */}
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                                                Vivamus suscipit tortor
                                                eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat.
                                            </p>
                                            {/**INFORMATION */}
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong>
                                                    <span className="color-text-a"> +961 123 456</span>
                                                </p>
                                                <p>
                                                    <strong>Mobile: </strong>
                                                    <span className="color-text-a"> +961 123 456</span>
                                                </p>
                                                <p>
                                                    <strong>Email: </strong>
                                                    <span className="color-text-a">example@example</span>
                                                </p>
                                                <p>
                                                    <strong>Address: </strong>
                                                    <span className="color-text-a">Beirut, Lebanon</span>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/** DANS LA MEUTE*/}
            <section className="property-single nav-arrow-b section-t3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {/**DANS LA MEUTE TITLE */}
                            <div className="row justify-content-between">
                                {/**TITLE COL-SM-12 */}
                                <div className="col-md-5 col-lg-4">
                                    {/**TITLE */}
                                    <div className="property-price d-flex justify-content-center foo">
                                        <div className="card-header-c d-flex">
                                            <div className="card-box-ico">
                                                <span className="ion-money">
                                                    <h5 className="title-c"><br/></h5>
                                                </span>
                                            </div>
                                            <div className="card-title-c align-self-center">
                                                <h5 className="title-c">Dans la Meute</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/**PROGRESSION ET BADGES */}
                            <div className="row justify-content-between">
                                {/**PROGRESSION */}
                                <div className="col-md-5 col-lg-4">
                                    <div className="property-summary">
                                        {/**PORGORESSION TITLE */}
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="title-box-d section-t4">
                                                    <h3 className="title-d">Progression</h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/**PROGRESSION LISTE */}
                                        <div class="summary-list">
                                            <ul class="list">
                                                <li class="d-flex justify-content-between">
                                                    <strong>Promesse:</strong>
                                                    <span>01/01/2021</span>
                                                </li>
                                                <li class="d-flex justify-content-between">
                                                    <strong>1ère Etoile:</strong>
                                                    <span>01/01/2021</span>
                                                </li>
                                                <li class="d-flex justify-content-between">
                                                    <strong>2ème Etoile:</strong>
                                                    <span>01/01/2021</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/**BADGES */}
                                <div className="col-md-7 col-lg-7 section-md-t3">
                                    {/**BADGES TITLE */}
                                    <div className="row section-t3">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">Badges</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/**BADGES LISTE */}
                                    <div class="amenities-list color-text-a">
                                        <ul class="list-a no-margin">
                                            <li>Cuisinier</li>
                                            <li>Campeur</li>
                                            <li>Example</li>
                                            <li>Example</li>
                                            <li>Example</li>
                                            <li>Example</li>
                                            <li>Example</li>
                                            <li>Example</li>
                                            <li>Example</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/** DANS LA TROUPE*/}
            <section className="property-single nav-arrow-b section-t3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {/**DANS LA TROUPE TITLE */}
                            <div className="row justify-content-between">
                                {/**TITLE COL-SM-12 */}
                                <div className="col-md-5 col-lg-4">
                                    {/**TITLE */}
                                    <div className="property-price d-flex justify-content-center foo">
                                        <div className="card-header-c d-flex">
                                            <div className="card-box-ico">
                                                <span className="ion-money">
                                                    <h5 className="title-c"><br/></h5>
                                                </span>
                                            </div>
                                            <div className="card-title-c align-self-center">
                                                <h5 className="title-c">Dans la Troupe</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/**PROGRESSION ET BADGES */}
                            <div className="row justify-content-between">
                                {/**PROGRESSION */}
                                <div className="col-md-5 col-lg-4">
                                    <div className="property-summary">
                                        {/**PORGORESSION TITLE */}
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="title-box-d section-t4">
                                                    <h3 className="title-d">Progression</h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/**PROGRESSION LISTE */}
                                        <div class="summary-list">
                                            <ul class="list">
                                                <li class="d-flex justify-content-between">
                                                    <strong>Promesse:</strong>
                                                    <span>01/01/2021</span>
                                                </li>
                                                <li class="d-flex justify-content-between">
                                                    <strong>2ème Classe:</strong>
                                                    <span>01/01/2021</span>
                                                </li>
                                                <li class="d-flex justify-content-between">
                                                    <strong>1ère Classe :</strong>
                                                    <span>01/01/2021</span>
                                                </li>
                                                <li class="d-flex justify-content-between">
                                                    <strong>Totem :</strong>
                                                    <span>01/01/2021</span>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/**BADGES */}
                                <div className="col-md-7 col-lg-7 section-md-t3">
                                    {/**BADGES TITLE */}
                                    <div className="row section-t3">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">Badges</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/**BADGES LISTE */}
                                    <div class="amenities-list color-text-a">
                                        <ul class="list-a no-margin">
                                            <li>Cuisinier</li>
                                            <li>Campeur</li>
                                            <li>Example</li>
                                            <li>Example</li>
                                            <li>Example</li>
                                            <li>Example</li>
                                            <li>Example</li>
                                            <li>Example</li>
                                            <li>Example</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/** DANS LE CLAN*/}
            <section className="property-single nav-arrow-b section-t3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {/**DANS LE CLAN TITLE */}
                            <div className="row justify-content-between">
                                {/**TITLE COL-SM-12 */}
                                <div className="col-md-5 col-lg-4">
                                    {/**TITLE */}
                                    <div className="property-price d-flex justify-content-center foo">
                                        <div className="card-header-c d-flex">
                                            <div className="card-box-ico">
                                                <span className="ion-money">
                                                    <h5 className="title-c"><br/></h5>
                                                </span>
                                            </div>
                                            <div className="card-title-c align-self-center">
                                                <h5 className="title-c">Dans le Clan</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/**FONCTION, PROGRESSION ET BADGES */}
                            <div className="row justify-content-between">
                                {/**FONCTION */}
                                <div className="col-md-4 col-lg-4">
                                    <div className="property-summary">
                                        {/**FONCTION TITLE */}
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="title-box-d section-t4">
                                                    <h3 className="title-d">Fonction</h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/**FONCTION LISTE */}
                                        <div class="summary-list">
                                            <ul class="list">
                                                <li class="d-flex justify-content-between">
                                                    <strong>2020-2021:</strong>
                                                    <span>CE</span>
                                                </li>
                                                <li class="d-flex justify-content-between">
                                                    <strong>2019-2020</strong>
                                                    <span>Membre</span>
                                                </li>
                                                <li class="d-flex justify-content-between">
                                                    <strong>2018-2019:</strong>
                                                    <span>Membre</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/**PROGRESSION */}
                                <div className="col-md-4 col-lg-4">
                                    <div className="property-summary">
                                        {/**PROGRESSION TITLE */}
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="title-box-d section-t4">
                                                    <h3 className="title-d">Progression</h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/**PROGRESSION LISTE */}
                                        <div class="summary-list">
                                            <ul class="list">
                                                <li class="d-flex justify-content-between">
                                                    <strong>Adhésion:</strong>
                                                    <span>01/01/2021</span>
                                                </li>
                                                <li class="d-flex justify-content-between">
                                                    <strong>1ère Veille:</strong>
                                                    <span>01/01/2021</span>
                                                </li>
                                                <li class="d-flex justify-content-between">
                                                    <strong>Départ :</strong>
                                                    <span>01/01/2021</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/**JALONS */}
                                <div className="col-md-4 col-lg-4 section-md-t3">
                                    {/**JALONS TITLE */}
                                    <div className="row section-t3">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">Jalons</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/**JALONS LISTE */}
                                    <div class="amenities-list color-text-a">
                                        <ul class="list-a no-margin">
                                            <li>Témoin</li>
                                            <li>Fleur de Lys</li>
                                            <li>Flèche d'or</li>
                                            <li>Example</li>
                                        </ul>
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

export default UserPage;