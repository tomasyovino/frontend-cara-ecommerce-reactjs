import { Footer, Header, OrdersContainer, Highlights } from "../components";
import orders from "../data/orders.json";

const OrderScreen = ({ products }) => {
  return (
    <>
        <Header />
        <OrdersContainer orders={orders} />
        <Highlights carousel={true} products={products} />
        <Footer />
    </>
  );
};

export default OrderScreen;