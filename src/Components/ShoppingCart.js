import React from "react"



export default function ShoppingCart({cartList,}){
    const cartItemList = cartList.map((item) => {
        return( <p key={item.id}>{item.name}</p>
        
        )})

    
    console.log("cartlist from shopping list",cartList)
/*  const cartListItems = cartList.map(item => <CartItems  key={cartList.id} item={item}/>)
*/
    return(
        <>
        <h1>Shopping Cart</h1>
        <div className = "shoppingCartContainer">
            {cartItemList}
        </div>
        </>
    )
}
