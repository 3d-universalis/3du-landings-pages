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
                    <Route exact path={`${process.env.PUBLIC_URL}/en/services/scan-3d`} component={scan3dEnglish}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fr/industriel`} component={industrielFR}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
// serviceWorker.register();


