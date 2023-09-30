<<<<<<< HEAD
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
=======
import React from "react";
import ItemCard from "./ItemCard";
const ProductList = ({ catProducts,addToCartList,deleteFromCart}) => {
 

    const productList = catProducts.map((item) => <ItemCard deleteFromCart={deleteFromCart} addToCartList={addToCartList} key={item.id}  item={item}/>)
>>>>>>> refs/remotes/origin/main
  return (
    <>
      <main className="cardDiv">{productList}</main>
    </>
  )
}

export default ProductList
