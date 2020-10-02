import React from 'react';
import './App.css';

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";


import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
