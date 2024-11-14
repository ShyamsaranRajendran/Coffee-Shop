import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import PopularDrinks from './Popularproducts';
import DeliverySteps from './DeliverySteps';
import About from './About';

const Main = () => {
  return (
    <div>
      <Hero />
      <PopularDrinks />
      <DeliverySteps />
      <About />
    </div>
  );
}

export default Main