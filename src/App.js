import React from 'react';
import BottomNavigation from './components/BottomNavigation';
import ProductContainer from './components/CategorySection';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import TopSection from './components/TopSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <TopSection />
      <ProductContainer />
      <BottomNavigation />
    </div>
  );
};

export default App;
