import { Header, PageHeader, CartTable, CartOrderTotal, Footer } from "../components";
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
        <Header />
        <PageHeader data={pageHeaderData} />
        <CartTable cartProducts={cart.products} />
        <CartOrderTotal cartAmount={cart}/>
        <Footer />
    </>
  )
}

export default CartScreen