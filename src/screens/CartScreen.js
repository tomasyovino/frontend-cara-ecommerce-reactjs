import { Header, PageHeader, CartTable, CartOrderTotal, Footer } from "../components";

const CartScreen = () => {
  const pageHeaderData = {
    id: "cart-hero",
    title: "conócenos",
    text: "¡Lorem ipsum dolor sit amet, consectetur!"
  }

  return (
    <>
        <Header />
        <PageHeader data={pageHeaderData} />
        <CartTable />
        <CartOrderTotal />
        <Footer />
    </>
  )
}

export default CartScreen