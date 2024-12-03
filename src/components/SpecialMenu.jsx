import React from "react";

const menuItems = [
  {
    name: "Signature Latte",
    price: "4.99",
    description:
      "Rich espresso with silky steamed milk and your choice of flavor",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
  },
  {
    name: "Cold Brew",
    price: "4.49",
    description:
      "Smooth, naturally sweet cold brew coffee steeped for 20 hours",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
  },
  {
    name: "Mocha Frappuccino",
    price: "5.49",
    description: "Blended coffee with rich chocolate and whipped cream",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
  },
  {
    name: "Signature Latte",
    price: "4.99",
    description:
      "Rich espresso with silky steamed milk and your choice of flavor",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
  },
  {
    name: "Cold Brew",
    price: "4.49",
    description:
      "Smooth, naturally sweet cold brew coffee steeped for 20 hours",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
  },
  {
    name: "Mocha Frappuccino",
    price: "5.49",
    description: "Blended coffee with rich chocolate and whipped cream",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
  },
];

const SpecialMenu = () => {
  return (
    <div className="special-menu-section">
      <h2 className="special-menu-title">Today's Special Menu</h2>
      <div className="special-menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className="special-menu-item">
            <img
              className="special-menu-item-image"
              src={item.image}
              alt={item.name}
            />
            <h3 className="special-menu-item-name">{item.name}</h3>
            <p className="special-menu-item-description">{item.description}</p>
            <span className="special-menu-item-price">${item.price}</span>
            <button className="special-menu-item-button">Add to Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialMenu;
