import React, { useState } from "react";
import { Car } from "lucide-react";
import Coffee from "../../src/assets/logo.svg";
import ShoppingCart from "../../src/assets/cart.svg";
import  ParkingModal from './Parking'
export default function Navbar() {
  const [isParkingModalOpen, setIsParkingModalOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo and Brand */}
        <div className="brand">
          <img src={Coffee} alt="Coffee logo" className="logo-icon" />
        </div>

        {/* Navigation Links */}
        <div className="nav-links hidden md:flex">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="#products" className="nav-link">
            Our Products
          </a>
          <a href="#delivery" className="nav-link">
            Delivery
          </a>
          <button
            onClick={() => setIsParkingModalOpen(true)}
            className="parking-button"
          >
            <a href="#delivery" className="nav-link">
              Parking
            </a>
          </button>
          <a href="infra" className="nav-link">
            Infrastructure
          </a>
        </div>

        {/* Shopping Cart Icon */}
        <div className="cart-container">
          <button className="cart-button">
            <img src={ShoppingCart} alt="Shopping cart" className="cart-icon" />
          </button>
          <div className="nav-links hidden md:flex">
            <a href="login" className="nav-link">
              login
            </a>
          </div>
        </div>
      </div>
      {isParkingModalOpen && (
        <ParkingModal onClose={() => setIsParkingModalOpen(false)} />
      )}
    </nav>
  );
}
