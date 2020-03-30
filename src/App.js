import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Weddings from './pages/Weddings';
import Contact from './pages/Contact';
import About from './pages/About';
import Family from './pages/Family';
import Christening from './pages/Christening';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Loading from './components/Loading';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/Loading" component={Loading}/>
   <Route exact path="/Contact" component={Contact}/>
   <Route exact path="/Weddings" component={Weddings}/>
   <Route exact path="/About" component={About}/>
   <Route exact path="/Family" component={Family}/>
   <Route exact path="/Christening" component={Christening}/>
   </Switch>
   </>
  );
}

export default App;
