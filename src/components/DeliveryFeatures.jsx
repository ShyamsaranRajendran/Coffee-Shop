import React from "react";
import { Clock, ThumbsUp, Leaf, Coffee } from "lucide-react";

const features = [
  {
    icon: <Clock className="feature-icon" />,
    title: "Quick Delivery",
    description: "Get your coffee delivered within 30 minutes of ordering",
  },
  {
    icon: <Coffee className="feature-icon" />,
    title: "Always Fresh",
    description: "Our coffee is freshly brewed right before delivery",
  },
  {
    icon: <ThumbsUp className="feature-icon" />,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee on all orders",
  },
  {
    icon: <Leaf className="feature-icon" />,
    title: "Eco-Friendly",
    description: "Sustainable packaging and responsible sourcing",
  },
];

const DeliveryFeatures = () => {
  return (
    <div className="delivery-features-container">
      <div className="delivery-features-wrapper">
        <div className="delivery-features-header">
          <h2 className="delivery-features-title">Why Choose Our Delivery?</h2>
          <p className="delivery-features-description">
            We've perfected our delivery service to ensure you get the best
            coffee experience possible.
          </p>
        </div>
        <div className="delivery-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="delivery-feature-card">
              <div className="delivery-feature-icon">{feature.icon}</div>
              <h3 className="delivery-feature-title">{feature.title}</h3>
              <p className="delivery-feature-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryFeatures;
