import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/home">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  )
}

export default NavBar
