import React from 'react';
import './App.css';
import Header from './Header'
import { BrowserRouter  as Router, Route } from 'react-router-dom'; 
import Banner from './Banner';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <Header />
          <Banner />
        </Route>
      </div>
    </Router>
  );
}

export default App;
