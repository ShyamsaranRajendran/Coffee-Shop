import React from "react";
import { Coffee } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Decorative Elements */}
      <div className="background-decorative-elements">
        <div className="background-circle-left"></div>
        <div className="background-circle-right"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-left-content">
            <h1 className="hero-title">
              Enjoy your <span className="highlighted-text">coffee</span> before
              your activity
            </h1>

            <p className="hero-description">
              Boost your productivity and build your mood with a glass of coffee
              in the morning
            </p>

            <button className="order-button">
              <Coffee className="coffee-icon" />
              Order Now
            </button>
          </div>

          {/* Right Content */}
          <div className="hero-right-content">
            {/* Main Coffee Image */}
            <div className="hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
                alt="Featured Coffee"
                className="hero-image"
              />
            </div>

            {/* Floating Card */}
            <div className="floating-card">
              <img
                src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400"
                alt="Cappuccino"
                className="floating-card-image"
              />
              <div className="floating-card-info">
                <div className="floating-card-header">
                  <h3 className="floating-card-title">Cappuccino</h3>
                  <span className="floating-card-rating">4.8 ⭐</span>
                </div>
                <p className="floating-card-orders">18K Orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
