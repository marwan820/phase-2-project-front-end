import CartItems from "./CartItems"

export default function ShoppingCart({cartList,}){
const cartListItems = cartList.map(item => <CartItems  key={cartList.id} item={item}/>)

    return(
        <div>
        <h1>Shopping Cart</h1>
        <div className = "shoppingCartContainer">
            {cartListItems}
        </div>
        </div>
    )
}
