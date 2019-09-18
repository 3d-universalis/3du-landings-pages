// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';
import architetureIndustryEnglish from './industries/en/architecture';
import architetureIndustryFrench from './industries/fr/architecture';
import automobileIndustryFrench from './industries/fr/automobile';
import automobileIndustryEnglish from './industries/en/automobile';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/en/architecture`} component={architetureIndustryEnglish}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fr/architecture`} component={architetureIndustryFrench}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/en/automobile`} component={automobileIndustryEnglish}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fr/automobile`} component={automobileIndustryFrench}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();


