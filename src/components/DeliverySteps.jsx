import React from "react";
import { Coffee, Truck, Clock, CreditCard } from "lucide-react";

const steps = [
  {
    icon: <Coffee className="icon" />,
    title: "Choose your coffee",
    description: "Select from our wide range of premium coffee beans",
  },
  {
    icon: <CreditCard className="icon" />,
    title: "Easy payment",
    description: "We accept all major credit cards and digital payments",
  },
  {
    icon: <Clock className="icon" />,
    title: "Fast preparation",
    description: "Your coffee is prepared with care and expertise",
  },
  {
    icon: <Truck className="icon" />,
    title: "Quick delivery",
    description: "Enjoy your coffee delivered right to your doorstep",
  },
];

export default function DeliverySteps() {
  return (
    <section className="delivery-steps-section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="icon-circle">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
