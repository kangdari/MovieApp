import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './Components/Navigation';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Navigation />
                <Route component={Home} path="/" exact />
                <Route component={About} path="/About" />
                <Route component={Detail} path="/movie/:id" />
            </HashRouter>
        </div>
    );
};

export default App;
