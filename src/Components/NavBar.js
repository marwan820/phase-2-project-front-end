import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navBar" >
      <NavLink to="/home">Home</NavLink>
      <br></br>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  )
}

export default NavBar
