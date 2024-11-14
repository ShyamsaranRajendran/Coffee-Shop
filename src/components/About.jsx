import React from "react";
import { Coffee, Users, Heart, Award } from "lucide-react";

const features = [
  {
    icon: <Coffee className="icon" />,
    title: "Premium Beans",
    description:
      "We source the finest coffee beans from sustainable farms worldwide",
  },
  {
    icon: <Users className="icon" />,
    title: "Expert Baristas",
    description:
      "Our skilled baristas are trained to craft the perfect cup every time",
  },
  {
    icon: <Heart className="icon" />,
    title: "Made with Love",
    description: "Every drink is crafted with passion and attention to detail",
  },
  {
    icon: <Award className="icon" />,
    title: "Award Winning",
    description: "Recognized for excellence in coffee brewing and service",
  },
];

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="content-grid">
          <div className="story-section">
            <h2 className="section-title">Our Story</h2>
            <p className="description-text">
              Founded in 2010, Café Blend has been serving premium coffee to our
              beloved customers. We believe that great coffee brings people
              together and creates memorable moments.
            </p>
            <p className="description-text">
              Our commitment to quality, sustainability, and exceptional service
              has made us a favorite destination for coffee lovers across the
              city.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50k+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="icon-circle">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
