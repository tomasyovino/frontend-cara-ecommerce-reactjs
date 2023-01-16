import { PageHeader, CartTable, CartOrderTotal } from "../components";
import { useSelector, useDispatch } from "react-redux";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const userID = useSelector((state) => state.user.currentUser._id);
  const dispatch = useDispatch();

  const pageHeaderData = {
    id: "cart-hero",
    title: "conócenos",
    text: "¡Lorem ipsum dolor sit amet, consectetur!"
  }

  return (
    <>
        <PageHeader data={pageHeaderData} />
        <CartTable cartProducts={cart.products} />
        <CartOrderTotal cart={cart} userID={userID} dispatch={dispatch} />
    </>
  )
}

export default CartScreen