import React from "react"

import ItemCard from "./ItemCard"
const ProductList = ({ catProducts, addToCartList, deleteFromCart }) => {
  const productList = catProducts.map((item) => (
    <ItemCard
      deleteFromCart={deleteFromCart}
      addToCartList={addToCartList}
      key={item.id}
      item={item}
    />
  ))
  return (
    <main className="container">
     {productList}
    </main>
  )
}

export default ProductList
