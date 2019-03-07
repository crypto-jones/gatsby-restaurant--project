import React from 'react';
import '../../sass/main.scss';
import Img from 'gatsby-image';

const Product = ({ product }) => {
  const { name, price, ingredients } = product;
  const { fixed } = product.img;

  return (
    <div className="product-wrapper">
      <Img fixed={fixed} className="img" />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p className="info">{ingredients}</p>
      </div>
    </div>
  );
};

export default Product;
