import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import {render} from 'react-dom';
import MainLayout from './components/MainLayout';
import PageLayout from './components/PageLayout';
import HomePage from './components/HomePage';
import KindlePage from './components/KindlePage';
import MecPage from './components/MecPage';
import KotexPage from './components/KotexPage';
import TicTacsPage from './components/TicTacsPage';

import './index.css';

render((
    <Router history={hashHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={HomePage}/>
            <Route component={PageLayout}>
                <Route path="kindle" component={KindlePage}/>
                <Route path="mec" component={MecPage}/>
                <Route path="kotex" component={KotexPage}/>
                <Route path="tic-tacs" component={TicTacsPage}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));
