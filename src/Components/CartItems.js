export default function CartItems(item) {
  return (
    <>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <img src={item.image}/>
    </>
  )
}
