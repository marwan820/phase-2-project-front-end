import React from "react";
import ItemCard from "./ItemCard";
const ProductList = ({ catProducts }) => {


    const productList = catProducts.map((item) => <ItemCard key={crypto.randomUUID()}  item={item}/>)
  return (
    <>
  <main className="cardDiv">
  {productList}
  </main>
  </>)

};

export default ProductList;
