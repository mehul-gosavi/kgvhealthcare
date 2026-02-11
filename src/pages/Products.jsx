import React, { useState } from "react";
import products from "../data/products.json";
import "./Products.css";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page-container">
      
      {/* 🔝 Top Bar */}
     <div className="products-top-bar">
  <h2 className="products-heading">Products</h2>

  <div className="search-wrapper">
    <span className="search-icon">🔍</span>
    <input
      type="text"
      placeholder="Search products..."
      className="products-search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
</div>


      {/* 🧱 Products Grid */}
      <div className="products-page-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="products-page-card">
              
              {/* Product name ABOVE image */}
              <h3 className="product-title">{product.name}</h3>

              <img src={product.image} alt={product.name} />

              {/* Short info below image */}
              <p className="product-short-desc">{product.shortInfo}</p>

              <a
                href={`/products/${product.id}`}
                className="products-page-btn"
              >
                View
              </a>
            </div>
          ))
        ) : (
          <p className="no-products">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
