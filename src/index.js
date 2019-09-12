// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';
import navalIndustryEnglish from './industries/en/naval';
import navalIndustryFrench from './industries/fr/naval';
import automobileIndustryFrench from './industries/fr/automobile';
import automobileIndustryEnglish from './industries/en/automobile';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/en/naval`} component={navalIndustryEnglish}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fr/naval`} component={navalIndustryFrench}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/en/naval`} component={automobileIndustryEnglish}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fr/naval`} component={automobileIndustryFrench}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();


