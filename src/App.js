import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Header from './components/Header';

function App() {
  return (
  <Router>
    <div className="App">
      <Header/>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path ="/resume" component = {Resume} />
      <Route exact path ="/contact" component = {Contact} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
