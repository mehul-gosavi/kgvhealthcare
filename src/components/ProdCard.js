import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCards.css'; // Import the CSS file

function ProductCards({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">
        {product.description.slice(0, 60)}...
      </p>
      <p className="product-price">₹{product.price}</p>
      <Link to={`/products/${product.id}`} className="view-details">
        View Details
      </Link>
    </div>
  );
}

export default ProductCards;
