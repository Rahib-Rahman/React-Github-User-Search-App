import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import Alert from './components/layout/Alert';

import NotFound from './components/pages/NotFound';

import About from './components/pages/About';

import Home from './components/pages/Home';

import User from './components/users/User';

import GithubState from './context/github/GithubState';

import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

  return (

    <GithubState>
      <AlertState>
        <Router>

          <div className="App">
            <Navbar title="Githhub User Search" icon="fab fa-github" />
            <div className="container">

              <Alert />

              <Switch>
                <Route exact path="/React-Github-User-Search-App" component={Home} />
                <Route exact path="/React-Github-User-Search-App/user/:login" component={User} />
                <Route exact path="/React-Github-User-Search-App/about" component={About} />
                <Route path="/React-Github-User-Search-App/about" component={NotFound} />
                <Route component={NotFound} />
              </Switch>

            </div>
          </div>

        </Router>
      </AlertState>
    </GithubState>

  );

};

export default App;
