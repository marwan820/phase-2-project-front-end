import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Header from "./Header"
import NavBar from "./NavBar"
import ProductList from "./ProductList"
import SearchForItem from "./SearchForItem"
import ShoppingCart from "./ShoppingCart"
//import { Route, Switch } from "react-router-dom";
//import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [catProducts, setCatProducts] = useState([])
  const [categorySelect, setCategorySelect] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [cartList,setToCartList]= useState([])

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

  function addToCartList(item){
    // item enter into cartList 
    setToCartList([...cartList,item])

  }

  console.log("cart list",cartList)

  const filteredItems = productSearch.filter((item) => {
    if (categorySelect === "All") {
      return true
    } else {
      return item.category === categorySelect
    }
  })

  

  //Pseudocode
  /*  when user hits add to cart, the item will be inCart, and will have a shopping cart list of all items inCart
   and will iterate and render all items in cart, 

  const shoppingCartFilter = catproducts.filter((item) => item.inCart = true )
  const shoppingCartList = shoppingCartFilter.map((item) <li key={item.id}>{item.name}{item.price}</li>)

  
  
  
  
  
  
  
  */ 
  

   console.log(catProducts)

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
        addToCartList={addToCartList}

      />
      <ShoppingCart  />
    </>
  )
}

export default App
