import React from 'react';
import BottomNavigation from '../BottomNavigation';
import ProductContainer from '../CategorySection';
import Navbar from '../Navbar';
import TopSection from '../TopSection';

const HomeScreen = () => {
  return (
    <>
      <TopSection />
      <ProductContainer />
      <BottomNavigation />
    </>
  );
};

export default HomeScreen;
