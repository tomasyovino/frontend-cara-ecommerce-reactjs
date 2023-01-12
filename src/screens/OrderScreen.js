import { Footer, Header, OrdersContainer, Highlights } from "../components";
import orders from "../data/orders.json";
import products from "../data/products.json";

const OrderScreen = () => {
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