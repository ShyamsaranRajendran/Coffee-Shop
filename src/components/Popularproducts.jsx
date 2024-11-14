import React from "react";
import backcolor from '../assets/backcolor.png';

const popularDrinks = [
  {
    name: "Vanilla Latte",
    price: "21K",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
  },
  {
    name: "Espresso",
    price: "12K",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400",
  },
  {
    name: "Hazelnut Latte",
    price: "23K",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",
  },
];

export default function PopularDrinks() {
  return (
    <section className="popular-drinks-section">
      <div className="containerPOP">
        <h2 className="section-title">Popular Now</h2>
        <div className="grid">
          {popularDrinks.map((drink) => (
            <div key={drink.name} className="drink-card">
              <img src={drink.image} alt={drink.name} className="drink-image" />
              <div className="card-content">
                <div className="card-header">
                  <div>
                    <h3 className="drink-name">{drink.name}</h3>
                    <p className="drink-price">{drink.price}</p>
                  </div>
                  <button className="add-button">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <img src={backcolor} alt="Background" className="backcolor" /> */}
    </section>
  );
}
