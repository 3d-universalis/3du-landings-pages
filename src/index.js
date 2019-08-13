// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';
import QuoteLanding from './base-landing/QuoteLanding';
import HomeOlive from './HomeOlive';
import HomeHorizontal from './HomeHorizontal';
import BlogGrid from './blog/BlogGrid';

import BlogTwoColumn from './blog/BlogTwoColumn';
import BlogDetails from './blog/BlogDetails';


import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={QuoteLanding}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();


