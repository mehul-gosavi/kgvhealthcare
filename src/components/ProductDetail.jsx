import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-detail-container">
        <h2>Product not found</h2>
        <button className="back-btn" onClick={() => navigate("/products")}>
          ← Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        {/* Image */}
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Info */}
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-short">{product.shortInfo}</p>
          <p className="product-desc">{product.description}</p>

          {/* Sections */}
          <div className="product-sections">
            {product.benefits?.length > 0 && (
              <div className="product-section">
                <h3>Benefits</h3>
                <ul>
                  {product.benefits.map((item, i) => (
                    <li key={i}> {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.contents?.length > 0 && (
              <div className="product-section">
                <h3>Contents</h3>
                <ul>
                  {product.contents.map((item, i) => (
                    <li key={i}> {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.howToUse?.length > 0 && (
              <div className="product-section">
                <h3>How to Use</h3>
                <ul>
                  {product.howToUse.map((item, i) => (
                    <li key={i}> {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Available Packing */}
              {product.availablePacking && (
              <div className="product-section">
                <h3> Available Packing</h3>
                <ul className="icon-list">
                  {product.availablePacking.map((pack, index) => (
                    <li key={index}> {pack}</li>
                  ))}
                </ul>
              </div>
               )}

            {product.caution?.length > 0 && (
              <div className="product-section caution">
                <h3>Caution</h3>
                <ul>
                  {product.caution.map((item, i) => (
                    <li key={i}> {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button className="back-btn" onClick={() => navigate("/products")}>
            ← Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
