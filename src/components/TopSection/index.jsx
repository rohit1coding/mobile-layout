import React from 'react';
import Slider from '../Slider';
import Item from './item';

import './style.css';

const TopSection = () => {
  return (
    <div className="topsection">
      <Slider />
      <div className="categories container-x">
        <h5 className="text-bold">Caregories</h5>
        <Item />
      </div>
    </div>
  );
};

export default TopSection;
