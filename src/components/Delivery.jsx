import React from "react";
import "../assets/Delivery.css"; 

const Delivery = () => {
  return (
    <div className="delivery-page">
      <header className="delivery-header">
        <h1>Fresh Coffee, Delivered to Your Doorstep</h1>
        <p>
          Experience the aroma of freshly brewed coffee without stepping out!
        </p>
      </header>

      <section className="delivery-feature">
        <img
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
          alt="Coffee Cup"
          className="featured-image"
        />
        <div className="feature-text">
          <h2>Our Special Brews</h2>
          <p>
            From bold espressos to creamy lattes, our coffee is crafted with
            love and delivered with care. Enjoy premium quality coffee made from
            the finest beans.
          </p>
          <button className="order-now-button">Order Now</button>
        </div>
      </section>

      <section className="delivery-info">
        <h2>Why Choose Our Delivery?</h2>
        <ul>
          <li>Quick and reliable service</li>
          <li>Freshly brewed coffee delivered to you</li>
          <li>Wide range of flavors to suit your taste</li>
          <li>Eco-friendly packaging</li>
        </ul>
      </section>

      <footer className="delivery-footer">
        <p>&copy; 2024 Coffee Bliss. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Delivery;
