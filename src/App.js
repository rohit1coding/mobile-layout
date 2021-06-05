import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './components/HomeScreen';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import ProfileScreen from './components/ProfileScreen';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/product" component={ProductDetails} />
      <Route path="/profile" component={ProfileScreen} />
    </Router>
  );
};

export default App;
