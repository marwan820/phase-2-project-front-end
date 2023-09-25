import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import ProductList from "./ProductList";
import SearchForItem from "./SearchForItem";
//import { Route, Switch } from "react-router-dom";
//import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [catProducts, setCatProducts] = useState([]);

  //const productsCopy = JSON.parse(JSON.stringify(catProducts))
 // console.log("copy",productsCopy)

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((res) => res.json())
      .then((items) => setCatProducts(items));
  }, []);
 // console.log("From app cat prudcts",catProducts)

   const handleItemCategory = (array) => (console.log(array))

  return (
    <>
      <Header />
      <NavBar />
      <SearchForItem catProducts={catProducts} handleItemCategory={handleItemCategory} />
      <ProductList catProducts={catProducts} setCatProducts={setCatProducts}/>
    </>
  );
}

export default App;
