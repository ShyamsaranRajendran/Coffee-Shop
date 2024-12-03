import React from "react";

const DeliveryHero = () => {
  return (
    <div className="delivery-hero-container">
      {/* Background Image */}
      <div className="delivery-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="Coffee Background"
          className="delivery-hero-bg-image"
        />
      </div>

      {/* Content */}
      <div className="delivery-hero-content-wrapper">
        <div className="delivery-hero-text">
          <h1 className="delivery-hero-title">
            Fresh Coffee, Delivered to Your Doorstep
          </h1>
          <p className="delivery-hero-subtitle">
            Experience the aroma of freshly brewed coffee without stepping out!
          </p>
          <button className="delivery-hero-button">Start Your Order</button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryHero;
