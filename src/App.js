import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Header from './components/Header';

function App() {
  return (
  
    <div className="App">
      <Header/>
      <Navbar/>
      
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/projects" exact element={<Projects/>} />
      <Route path ="/resume" exact element = {<Resume/>} />
      <Route path ="/contact" exact element = {<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
