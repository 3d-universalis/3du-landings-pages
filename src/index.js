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
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
// IMPORTANT AJOUTER LA ROUTE DANS NOW.JS
class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch> 
                    <Route exact path={`${process.env.PUBLIC_URL}/en/architecture`} component={architectureIndustryEnglish}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fr/architecture`} component={architectureIndustryFrench}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fr/maquettes`} component={architectureIndustryFrench}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fr/impression-3d`} component={threeDPrintingFrench}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/en/3d-printing`} component={threeDPrintingEnglish}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fr/services/scan-3d`} component={scan3dFrench}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/en/services/3d-scan`} component={scan3dEnglish}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fr/industriel`} component={industrielFR}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/en/industrial`} component={industrielEN}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fr/services/prototypes`} component={prototypingFR}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/en/services/protyping`} component={prototypingEN}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fr/services/creation-logo-3d`} component={LogoFR}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/en/services/3d-logo-printing`} component={LogoEN}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
// serviceWorker.register();


