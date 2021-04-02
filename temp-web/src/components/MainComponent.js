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
import AnciensForm from './AnciensFormComponent';
import Contact from './ContactComponent';
import Branches from './BranchesComponent';
import BrancheLouvettes from './BrancheLouvettesComponent';
import MeuteMistral from './MeuteMistralComponent';
import BrancheLouveteaux from './BrancheLouveteauxComponent';
import MeuteMagma from './MeuteMagmaComponent';
import MeuteBlizzard from './MeuteBlizzardComponent';
import BrancheEclaireuses from './BrancheEclaireusesComponent';
import TroupeCascade from './TroupeCascadeComponent';
import BrancheEclaireurs from './BrancheEclaireursComponent';
import TroupeEtoile from './TroupeEtoileComponent';
import TroupeSource from './TroupeSourceComponent';
import TroupeFlamme from './TroupeFlammeComponent';
import BranchePionnieres from './BranchePionnieresComponent';
import ClanDesPionnieres from './ClanDesPionnieresComponent';
import BrancheRoute from './BrancheRouteComponent';
import ClanDesRoutiers from './ClanDesRoutiersComponent';
import UserPage from './UserComponent';
import Example from './TestComponent';
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
                    <Route exact path="/anciens-form" component={AnciensForm} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/branches" component={Branches} />
                    <Route exact path="/branche-louvettes" component={BrancheLouvettes} />
                    <Route exact path="/meute-mistral" component={MeuteMistral} />
                    <Route exact path="/branche-louveteaux" component={BrancheLouveteaux} />
                    <Route exact path="/meute-magma" component={MeuteMagma} />
                    <Route exact path="/meute-blizzard" component={MeuteBlizzard} />
                    <Route exact path="/branche-eclaireuses" component={BrancheEclaireuses} />
                    <Route exact path="/troupe-cascade" component={TroupeCascade} />
                    <Route exact path="/branche-eclaireurs" component={BrancheEclaireurs} />
                    <Route exact path="/troupe-etoile" component={TroupeEtoile} />
                    <Route exact path="/troupe-source" component={TroupeSource} />
                    <Route exact path="/troupe-flamme" component={TroupeFlamme} />
                    <Route exact path="/branche-pionnieres" component={BranchePionnieres} />
                    <Route exact path="/clan-des-pionnieres" component={ClanDesPionnieres} />
                    <Route exact path="/branche-route" component={BrancheRoute} />
                    <Route exact path="/clan-des-routiers" component={ClanDesRoutiers} />
                    <Route exact path="/user-page" component={UserPage} />
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