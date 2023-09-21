import React from "react";

const ItemCard = ({ item }) => {
  const { productId, productName, price, description, category, brand } = item;


  function handleClick() {
    console.log("Button click");
  }
  return (
    <div key={productId} className="card">
      <p>{productName}</p>
      <p>${price}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{brand}</p>
      <button onClick={handleClick} type="">
        Add to cart
      </button>
    </div>
  );
};

export default ItemCard;
