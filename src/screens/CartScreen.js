import { PageHeader, CartTable, CartOrderTotal } from "../components";
import { useSelector } from "react-redux";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const pageHeaderData = {
    id: "cart-hero",
    title: "conócenos",
    text: "¡Lorem ipsum dolor sit amet, consectetur!"
  }

  return (
    <>
        <PageHeader data={pageHeaderData} />
        <CartTable cartProducts={cart.products} />
        <CartOrderTotal cartAmount={cart}/>
    </>
  )
}

export default CartScreen