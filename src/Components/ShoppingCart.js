export default function ShoppingCart({cartList}){
    const cartListArray = cartList.map((item) => <li key={item.id}>{item.name}</li>)
    return(
        <div>
        <h1>Shopping Cart</h1>
        <ul>
    {cartListArray}
        </ul>
        </div>
    )
}