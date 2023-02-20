import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../api/request";
import { OrdersContainer, Highlights, Loader } from "../components";

const OrderScreen = ({ products, loader }) => {
  const [ orders, setOrders ] = useState([]);
  const userID = useSelector((state) => state.user.currentUser._id);

  useEffect(() => {
    const getOrders = async () => {
      const findedOrders = await userRequest.get(`orders/find/${userID}`);
      setOrders(findedOrders.data);
    };
    getOrders();
  }, [userID]);

  if(loader) return <Loader />;

  return (
    <>
        <OrdersContainer orders={orders} />
        <Highlights carousel={true} products={products} />
    </>
  );
};

export default OrderScreen;