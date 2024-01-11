import React from 'react';
import '../src/foodcard.css';

const FoodCard = ({ title, price, imageSrc, addToCart }) => {
  const handleAddToCart = () => {
    // Llamar a la función addToCart con los datos del producto
    const product = { title, price, imageSrc };
    addToCart(product);
  };

  return (
    <button className="card zoom" onClick={handleAddToCart}>
      <div className='container'>
        <img src={imageSrc} alt={title} className="container_image"/>
      </div>
      <div className="info">
        <h3 className='info_tittle'>{title}</h3>
        <p className='info_price'>{price}</p>
      </div>
    </button>
  );
};

export default FoodCard;
