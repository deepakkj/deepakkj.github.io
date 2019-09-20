import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GA from './tracking';
import "./App.scss";

import HomePage from './pages/HomePage/HomePage';
import AllProjectsPage from './pages/AllProjectsPage/AllProjectsPage';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      { GA.init() && <GA.RouteTracker /> }
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/project" component={AllProjectsPage} />
          <Route component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
