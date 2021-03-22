import React, { Component } from 'react';
import Header from './HeaderComponent';
import CarouselHome from './CarouselComponent';
import Footer from './FooterComponent';
import Maitrise from './MaitriseComponent';
import Contact from './ContactComponent';
import MaitriseTest from './MaitriseTest';
import Publications from './PublicationsComponent';

class Main extends Component { 
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <Header />

                <MaitriseTest />

                <div>
                    <br/><br/><br/>
                </div>



                <Footer />
            </div>
        );
        
    }
}

export default Main;