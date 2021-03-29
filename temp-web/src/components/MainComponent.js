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
import MeuteMistral from './MeuteMistralComponent';
import Louveteaux from './LouveteauxComponent';
import MeuteMagma from './MeuteMagmaComponent';
import MeuteBlizzard from './MeuteBlizzardComponent';
import Eclaireuses from './EclaireusesComponent';
import TroupeCascade from './TroupeCascadeComponent';
import Eclaireurs from './EclaireursComponent';
import TroupeEtoile from './TroupeEtoileComponent';
import TroupeSource from './TroupeSourceComponent';
import TroupeFlamme from './TroupeFlammeComponent';
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
                    <Route exact path="/meute-mistral" component={MeuteMistral} />
                    <Route exact path="/louveteaux" component={Louveteaux} />
                    <Route exact path="/meute-magma" component={MeuteMagma} />
                    <Route exact path="/meute-blizzard" component={MeuteBlizzard} />
                    <Route exact path="/eclaireuses" component={Eclaireuses} />
                    <Route exact path="/troupe-cascade" component={TroupeCascade} />
                    <Route exact path="/eclaireurs" component={Eclaireurs} />
                    <Route exact path="/troupe-etoile" component={TroupeEtoile} />
                    <Route exact path="/troupe-source" component={TroupeSource} />
                    <Route exact path="/troupe-flamme" component={TroupeFlamme} />
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