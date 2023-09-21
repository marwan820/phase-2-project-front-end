import { useState, useEffect } from "react";

import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Form from "./SearchForItem";
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
      <NavBar />
      <Header />
      <ProductList catProducts={catProducts} />
      <SearchForItem catProducts={catProducts} />
    </>
  );
}

export default App;
