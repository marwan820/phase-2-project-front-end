import React from "react";
import ItemCard from "./ItemCard";
const ProductList = ({ catProducts }) => {
 

    const productList = catProducts.map((item) => <ItemCard key={catProducts.id}  item={item}/>)
  return (
    <>
  <main className="cardDiv">
  {productList}
  </main>
  </>)

};

export default ProductList;
