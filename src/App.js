import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Login from "./components/Login";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Game from "./components/Game/Game";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function App() {
  return (
    <div className="App">
        <Router>
            <section className="App section">
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/game' component={Game} />
                </Switch>
            </section>
        </Router>
    </div>
  );
}

export default App;
