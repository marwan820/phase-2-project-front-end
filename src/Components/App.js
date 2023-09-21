import { useState, useEffect } from "react";

import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import ProductList from "./ProductList";
import SearchForItem from "./SearchForItem";
//import { Route, Switch } from "react-router-dom";
//import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [catProducts, setCatProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/catProducts")
      .then((res) => res.json())
      .then((items) => setCatProducts(items));
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <SearchForItem catProducts={catProducts} />
      <ProductList catProducts={catProducts} />
    </>
  );
}

export default App;
