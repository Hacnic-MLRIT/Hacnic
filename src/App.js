import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Events from './pages/Events';
import Join from './pages/Join';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/join-us">
            <Join />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
