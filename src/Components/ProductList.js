import React from "react";
import ItemCard from "./ItemCard";
const ProductList = ({ catProducts,addToCartList}) => {
 

    const productList = catProducts.map((item) => <ItemCard addToCartList={addToCartList} key={item.id}  item={item}/>)
  return (
    <>
  <main className="cardDiv">
  {productList}
  </main>
  </>)

};

export default ProductList;
