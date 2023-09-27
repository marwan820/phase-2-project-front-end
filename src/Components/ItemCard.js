import React, { useState } from "react"

const ItemCard = ({ item, addToCartList, deleteFromCart }) => {
  const { id, name, price, description, image, category } = item
  const [inCart, setIncart] = useState(false)

  console.log(inCart)
  const addToCart = () => {
    setIncart((inCart) => !inCart)
    if (inCart === false) {
      addToCartList(item)
    } else  { deleteFromCart(item)}
  }

  return (
    <div key={id} className="card">
      <p>{name}</p>
      <p>${price}</p>
      <p>{description}</p>
      <p>{category}</p>
      <img className="image" src={image} alt={name}></img>
      <button onClick={addToCart} type="">
        {inCart === false ? "Add to cart" : "Delete from cart"}
      </button>
    </div>
  )
}

export default ItemCard
