import React from "react";
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          {/* Café Blend Section */}
          <div className="footer-section">
            <div className="flex items-center gap-2">
              <Coffee className="icon-coffee" size={24} />
              <span className="footer-title">Café Blend</span>
            </div>
            <p className="footer-description">
              Your perfect cup of coffee, crafted with passion and served with
              love.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-list">
              <li>123 Coffee Street</li>
              <li>New York, NY 10001</li>
              <li>Tel: (555) 123-4567</li>
              <li>Email: info@cafeblend.com</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>© 2024 Café Blend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
