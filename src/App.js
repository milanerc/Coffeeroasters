import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Subscribe from './components/Subscribe';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router >
            <div>
                <Header />
                <Switch >
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                    <Route exact path='/subscribe'>
                        <Subscribe />
                    </Route>
                </Switch>
                <Footer />
            </div>
       </Router>
    )
}

export default App
