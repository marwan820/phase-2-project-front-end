import "./ShopCart.css"

export default function ShoppingCart({ cartList, deleteFromCart }) {
 // const { id, image, name, price, category } = cartList

  console.log("Shopping cart cartlist", cartList)

  const cartListArray = cartList.map((item) => (
    <>
      <p key={item.id}>{item.name}</p>
      <img className="cart-image" src={item.image} alt={item.name} />
      <button  type="button" onClick={deleteFromCart}>Remove from cart</button>
    </>
  ))

  return (
    <div className="shoppingCart">
      <h1>Shopping Cart</h1>
      {cartListArray}
    </div>
  )
}
