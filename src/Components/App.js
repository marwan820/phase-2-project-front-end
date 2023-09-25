import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Header from "./Header"
import NavBar from "./NavBar"
import ProductList from "./ProductList"
import SearchForItem from "./SearchForItem"
//import { Route, Switch } from "react-router-dom";
//import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [catProducts, setCatProducts] = useState([])
  const [categorySelect, setCategorySelect] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((res) => res.json())
      .then((items) => setCatProducts(items))
  }, [])

  const productSearch = catProducts.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const filteredItems = productSearch.filter((item) => {
    if (categorySelect === "All") {
      return true
    } else {
      return item.category === categorySelect
    }
  })

  // console.log(searchTerm)

  return (
    <>
      <Header />
      <NavBar />
      <SearchForItem
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        catProducts={catProducts}
        categorySelect={categorySelect}
        setCategorySelect={setCategorySelect}
      />
      <ProductList
        catProducts={filteredItems}
        setCatProducts={setCatProducts}
      />
    </>
  )
}

export default App
