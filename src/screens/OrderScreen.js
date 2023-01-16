import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../api/request";
import { OrdersContainer, Highlights } from "../components";

const OrderScreen = ({ products }) => {
  const [ orders, setOrders ] = useState([]);
  const userID = useSelector((state) => state.user.currentUser._id);

  useEffect(() => {
    const getOrders = async () => {
      const findedOrders = await userRequest.get(`orders/find/${userID}`);
      setOrders(findedOrders.data);
    };
    getOrders();
  }, [userID]);

  return (
    <>
        <OrdersContainer orders={orders} />
        <Highlights carousel={true} products={products} />
    </>
  );
};

export default OrderScreen;