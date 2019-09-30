// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';
import architectureIndustryEnglish from './industries/en/architecture';
import architectureIndustryFrench from './industries/fr/architecture';
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
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
// serviceWorker.register();


