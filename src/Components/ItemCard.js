import React, { useState } from "react"

const ItemCard = ({ item, addToCartList, deleteFromCart }) => {
  const { id, name, price, description, image, category } = item
  const [inCart, setIncart] = useState(false)

  const addToCart = () => {
    setIncart((inCart) => !inCart)
    if (inCart === false) {
      addToCartList(item)
    } else {
      deleteFromCart(item)
    }
  }

  return (
    <div key={id} className="card">
      <span>{name}</span>
      <span>${price}</span>
      <span>{description}</span>
      <span>{category}</span>
      <img className="item-image" src={image} alt={name}></img>
      <button onClick={addToCart} type="button">
        {inCart === false ? "Add to cart" : "Delete from cart"}
      </button>
    </div>
  )
}

export default ItemCard
