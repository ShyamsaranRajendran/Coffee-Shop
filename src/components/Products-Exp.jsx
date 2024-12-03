import React from "react";
import { Star, Filter } from "lucide-react";

export const ProductCard = ({
  name,
  price,
  rating,
  image,
  description,
  category,
}) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={name} className="product-image" />
        <div className="category-badge">{category}</div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">${price.toFixed(2)}</span>
        </div>
        <p className="product-description">{description}</p>
        <div className="card-footer">
          <div className="rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                className={
                  index < Math.round(rating) ? "star-filled" : "star-empty"
                }
              />
            ))}
            <span className="rating-text">({rating}/5)</span>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

// Product Filter Component
export const ProductFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    "All",
    "Coffee Beans",
    "Brewed Coffee",
    "Equipment",
    "Accessories",
  ];

  return (
    <div className="product-filter">
      <div className="filter-header">
        <Filter size={20} />
        <h2>Filters</h2>
      </div>
      <div className="filter-options">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

// Sample Product Data
export const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    price: 18.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9",
    description:
      "Light roasted single-origin coffee with floral and citrus notes",
    category: "Coffee Beans",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    price: 16.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    description: "Medium roast with caramel sweetness and nutty undertones",
    category: "Coffee Beans",
  },
  {
    id: 3,
    name: "Pour-Over Kit",
    price: 34.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574",
    description: "Complete pour-over setup with glass dripper and filters",
    category: "Equipment",
  },
  {
    id: 4,
    name: "Espresso Blend",
    price: 19.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f",
    description: "Dark roasted blend perfect for espresso with chocolate notes",
    category: "Coffee Beans",
  },
  {
    id: 5,
    name: "Cold Brew Maker",
    price: 29.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f",
    description: "1-liter capacity cold brew coffee maker with filter",
    category: "Equipment",
  },
  {
    id: 6,
    name: "Ceramic Mug Set",
    price: 24.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f",
    description: "Set of 4 handcrafted ceramic coffee mugs",
    category: "Accessories",
  },
  {
    id: 7,
    name: "Ethiopian Yirgacheffe",
    price: 18.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9",
    description:
      "Light roasted single-origin coffee with floral and citrus notes",
    category: "Coffee Beans",
  },
  {
    id: 8,
    name: "Colombian Supremo",
    price: 16.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    description: "Medium roast with caramel sweetness and nutty undertones",
    category: "Coffee Beans",
  },
  {
    id: 9,
    name: "Pour-Over Kit",
    price: 34.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574",
    description: "Complete pour-over setup with glass dripper and filters",
    category: "Equipment",
  },
  {
    id: 10,
    name: "Espresso Blend",
    price: 19.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f",
    description: "Dark roasted blend perfect for espresso with chocolate notes",
    category: "Coffee Beans",
  },
  {
    id: 11,
    name: "Cold Brew Maker",
    price: 29.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f",
    description: "1-liter capacity cold brew coffee maker with filter",
    category: "Equipment",
  },
  {
    id: 12,
    name: "Ceramic Mug Set",
    price: 24.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f",
    description: "Set of 4 handcrafted ceramic coffee mugs",
    category: "Accessories",
  },
  {
    id: 13,
    name: "Espresso Blend",
    price: 19.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f",
    description: "Dark roasted blend perfect for espresso with chocolate notes",
    category: "Coffee Beans",
  },
  {
    id: 14,
    name: "Cold Brew Maker",
    price: 29.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f",
    description: "1-liter capacity cold brew coffee maker with filter",
    category: "Equipment",
  },
  {
    id: 15,
    name: "Ceramic Mug Set",
    price: 24.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f",
    description: "Set of 4 handcrafted ceramic coffee mugs",
    category: "Accessories",
  },
  {
    id: 16,
    name: "Ethiopian Yirgacheffe",
    price: 18.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9",
    description:
      "Light roasted single-origin coffee with floral and citrus notes",
    category: "Coffee Beans",
  },
  {
    id: 17,
    name: "Colombian Supremo",
    price: 16.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    description: "Medium roast with caramel sweetness and nutty undertones",
    category: "Coffee Beans",
  },
];
