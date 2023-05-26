import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login/Login';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Login/>
      </div>
    </div>
  );
}

export default App;
