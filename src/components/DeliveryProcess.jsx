import React from "react";
import { ShoppingCart, Truck, Coffee, Check } from "lucide-react";

const steps = [
  {
    icon: <ShoppingCart className="step-icon" />,
    title: "Place Your Order",
    description: "Choose your favorite coffee and brewing method",
  },
  {
    icon: <Coffee className="step-icon" />,
    title: "We Prepare",
    description: "Our baristas craft your coffee with precision",
  },
  {
    icon: <Truck className="step-icon" />,
    title: "Swift Delivery",
    description: "Your coffee is on its way to you",
  },
  {
    icon: <Check className="step-icon" />,
    title: "Enjoy",
    description: "Savor your perfectly brewed coffee",
  },
];

const DeliveryProcess = () => {
  return (
    <div className="delivery-process-container">
      <div className="delivery-process-wrapper">
        <div className="delivery-process-header">
          <h2 className="delivery-process-title">How It Works</h2>
          <p className="delivery-process-description">
            From order to delivery, we ensure a seamless experience
          </p>
        </div>
        <div className="delivery-process-steps-wrapper">
          {/* Line Connector */}
          <div className="delivery-process-line" />
          {/* Steps */}
          <div className="delivery-process-steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="delivery-process-step">
                <div className="delivery-process-step-card">
                  <div className="delivery-process-step-icon">{step.icon}</div>
                  <h3 className="delivery-process-step-title">{step.title}</h3>
                  <p className="delivery-process-step-text">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryProcess;
