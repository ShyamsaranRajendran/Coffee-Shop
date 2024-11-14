import React from "react";
import { Building, ParkingSquare, Coffee, Users } from "lucide-react";

export default function Infrastructure() {
  return (
    <section className="infrastructure-section">
      <div className="container">
        <h2 className="section-title">Our Infrastructure</h2>

        {/* Main Café Area */}
        <div className="main-cafe-area">
          <div className="text-section">
            <h3 className="title">
              <Building className="icon" />
              Main Café Area
            </h3>
            <p className="description">
              Our café features a modern, spacious design with comfortable
              seating arrangements and a welcoming atmosphere.
            </p>
            <ul className="features">
              <li>• 2,000 sq ft of dining space</li>
              <li>• Capacity for 100+ guests</li>
              <li>• Private meeting rooms</li>
              <li>• Outdoor seating area</li>
            </ul>
          </div>
          <div className="image-gallery">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500"
              alt="Café Interior"
            />
            <img
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500"
              alt="Café Seating"
            />
            <img
              src="https://images.unsplash.com/photo-1600093463592-2e8d28d7f1f6?w=500"
              alt="Coffee Bar"
            />
            <img
              src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=500"
              alt="Outdoor Area"
            />
          </div>
        </div>

        {/* Blueprints Section */}
        <div className="blueprints-section">
          <h3 className="blueprints-title">Facility Blueprints</h3>
          <div className="blueprints-gallery">
            {/* Floor Plan */}
            <div className="blueprint">
              <div className="blueprint-image">
                <svg viewBox="0 0 200 200">
                  <rect
                    x="20"
                    y="20"
                    width="160"
                    height="160"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                  />
                  <rect
                    x="20"
                    y="80"
                    width="60"
                    height="100"
                    fill="#93c5fd"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <h4>Main Floor Plan</h4>
            </div>

            {/* Kitchen Layout */}
            <div className="blueprint">
              <div className="blueprint-image">
                <svg viewBox="0 0 200 200">
                  <rect
                    x="40"
                    y="40"
                    width="120"
                    height="120"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h4>Kitchen Layout</h4>
            </div>

            {/* Parking Layout */}
            <div className="blueprint">
              <div className="blueprint-image">
                <svg viewBox="0 0 200 200">
                  <rect
                    x="20"
                    y="20"
                    width="160"
                    height="160"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h4>Parking Layout</h4>
            </div>
          </div>
        </div>

        {/* Facilities Overview */}
        <div className="facilities-overview">
          <div className="facility">
            <Coffee className="icon" />
            <h4>Modern Equipment</h4>
            <p>State-of-the-art coffee machines and equipment</p>
          </div>
          <div className="facility">
            <Users className="icon" />
            <h4>Comfortable Space</h4>
            <p>Ergonomic seating and ambient lighting</p>
          </div>
          <div className="facility">
            <ParkingSquare className="icon" />
            <h4>Easy Parking</h4>
            <p>Smart parking system with real-time availability</p>
          </div>
        </div>
      </div>
    </section>
  );
}
