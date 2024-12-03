import React, { useState } from "react";
import { ProductCard, ProductFilter, products } from "./Products-Exp";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="Products">
      
      <main>
        <ProductFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              rating={product.rating}
              image={product.image}
              description={product.description}
              category={product.category}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
