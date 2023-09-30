import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Header from "./Header"
import NavBar from "./NavBar"
import ProductList from "./ProductList"
import SearchForItem from "./SearchForItem"
import ShoppingCart from "./ShoppingCart"
import { Route, Switch } from "react-router-dom"

function App() {
  const [catProducts, setCatProducts] = useState([])
  const [categorySelect, setCategorySelect] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [cartList, setToCartList] = useState([])

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

  function addToCartList(item) {
    // item enter into cartList
    setToCartList([...cartList, item])
  }

  function deleteFromCart(item) {
    const newArray = cartList.filter((product) => product.id !== item.id)
    setToCartList(newArray)
  }

  const handleCartDelete = (e) => {
    console.log(e)
  }

  const filteredItems = productSearch.filter((item) => {
    if (categorySelect === "All") {
      return true
    } else {
      return item.category === categorySelect
    }
  })

  //console.log(catProducts)

  return (
    <div className="app-container">
      <Header />
      <NavBar />
      <Switch>
        <Route path="/">
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
            addToCartList={addToCartList}
            deleteFromCart={deleteFromCart}
          />
        </Route>

        <Route path="/cart">
          <ShoppingCart cartList={cartList} deleteFromCart={handleCartDelete} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
