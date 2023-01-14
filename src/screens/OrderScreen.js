import { OrdersContainer, Highlights } from "../components";
import orders from "../data/orders.json";

const OrderScreen = ({ products }) => {
  return (
    <>
        <OrdersContainer orders={orders} />
        <Highlights carousel={true} products={products} />
    </>
  );
};

export default OrderScreen;