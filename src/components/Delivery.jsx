import React from "react";
import DeliveryHero from "./DeliveryHero";
import DeliveryFeatures from "./DeliveryFeatures";
import DeliveryProcess from "./DeliveryProcess";
import SpecialMenu from "./SpecialMenu";

const Delivery = () => {
  return (
    <div className="delivery-container">
      <DeliveryHero />
      <DeliveryFeatures />
      <DeliveryProcess />
      <SpecialMenu />

      
    </div>
  );
};

export default Delivery;
