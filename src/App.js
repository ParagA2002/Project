import React from 'react';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';



function App() {
  return (
  <div className="App">
    <Header/>
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/details/:id" element={<Details/>}/>
          <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </Router>

     
       
    </div>
  );
}

export default App;
