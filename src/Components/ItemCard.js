import React from "react";

const ItemCard = ({ item }) => {
  const { id, name, price, description,image, category} = item;


  function handleClick() {
    console.log("Button click");
  }
  return (
    <div key={id} className="card">
      <p>{name}</p>
      <p>${price}</p>
      <p>{description}</p>
      <p>{category}</p>
      <img className="image" src={image} alt={name}></img>
      <button onClick={handleClick} type="">
        Add to cart
      </button>
    </div>
  );
};

export default ItemCard;
