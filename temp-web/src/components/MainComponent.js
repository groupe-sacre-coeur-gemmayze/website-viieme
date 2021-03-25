import React, { Component } from 'react';
import Header from './HeaderComponent';
import CarouselHome from './CarouselComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Histoire from './HistoireComponent';
import Methode from './MethodeComponent';
import Appartenance from './AppartenanceComponent';
import Publications from './PublicationsComponent';
import Maitrise from './MaitriseComponent';
import MaitriseTest from './MaitriseTest';
import Activites from './ActivitesComponent';
import Anciens from './AnciensComponent';
import Contact from './ContactComponent';
import Branches from './BranchesComponent';
import Louvettes from './LouvettesComponent';
import Louveteaux from './LouveteauxComponent';
import Eclaireuses from './EclaireusesComponent';
import Eclaireurs from './EclaireursComponent';
import Pionnieres from './PionnieresCpmponent';
import Routiers from './RoutiersComponent';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component { 
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <Header />

                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/histoire" component={Histoire} />
                    <Route exact path="/methode" component={Methode} />
                    <Route exact path="/appartenance" component={Appartenance} />
                    <Route exact path="/publications" component={Publications} />
                    <Route exact path="/maitrise" component={MaitriseTest} />
                    <Route exact path="/activites" component={Activites} />
                    <Route exact path="/anciens" component={Anciens} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/branches" component={Branches} />
                    <Route exact path="/louvettes" component={Louvettes} />
                    <Route exact path="/louveteaux" component={Louveteaux} />
                    <Route exact path="/eclaireuses" component={Eclaireuses} />
                    <Route exact path="/eclaireurs" component={Eclaireurs} />
                    <Route exact path="/pionnieres" component={Pionnieres} />
                    <Route exact path="/routiers" component={Routiers} />
                    <Redirect to ='/home' />                    
                </Switch>

                <div>
                    <br/><br/><br/>
                </div>



                <Footer />
            </div>
        );
        
    }
}

export default Main;