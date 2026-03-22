// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';
import architectureIndustryEnglish from './industries/en/Architecture';
import architectureIndustryFrench from './industries/fr/Architecture';
import threeDPrintingFrench from './industries/fr/ThreeDPrinting';
import threeDPrintingEnglish from './industries/en/ThreeDPrinting';
import scan3dFrench from './industries/fr/Scan3D';
import scan3dEnglish from './industries/en/Scan3D';
import industrielFR from './industries/fr/Industriel';
import industrielEN from './industries/en/Industriel';
import prototypingFR from './industries/fr/Prototyping';
import prototypingEN from './industries/en/Prototyping';
import LogoFR from './industries/fr/Logo';
import LogoEN from './industries/en/Logo';
import MoldFR from './industries/fr/Mold';
import MoldEN from './industries/en/Mold';
import Home from './Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
// IMPORTANT AJOUTER LA ROUTE DANS NOW.JS
class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/en/architecture" component={architectureIndustryEnglish}/>
                    <Route exact path="/fr/architecture" component={architectureIndustryFrench}/>
                    <Route exact path="/fr/maquettes" component={architectureIndustryFrench}/>
                    <Route exact path="/fr/impression-3d" component={threeDPrintingFrench}/>
                    <Route exact path="/en/3d-printing" component={threeDPrintingEnglish}/>
                    <Route exact path="/fr/services/scan-3d" component={scan3dFrench}/>
                    <Route exact path="/en/services/3d-scan" component={scan3dEnglish}/>
                    <Route exact path="/fr/industriel" component={industrielFR}/>
                    <Route exact path="/en/industrial" component={industrielEN}/>
                    <Route exact path="/fr/services/prototypes" component={prototypingFR}/>
                    <Route exact path="/en/services/prototyping" component={prototypingEN}/>
                    <Route exact path="/fr/services/creation-logo-3d" component={LogoFR}/>
                    <Route exact path="/en/services/3d-logo-printing" component={LogoEN}/>
                    <Route exact path="/fr/services/moules-et-matrices" component={MoldFR}/>
                    <Route exact path="/en/services/custom-molds" component={MoldEN}/>                    
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
// serviceWorker.register();


