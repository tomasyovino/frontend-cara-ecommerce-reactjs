import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from "../api/request";
import { PageHeader, ProfileBanner,Highlights, Newsletter, Loader } from "../components";

const ProfileScreen = ({ products, loader }) => {
  const [ user, setUser ] = useState(null);
  const [ orders, setOrders ] = useState(null);
  const userID = useSelector((state) => state.user.currentUser._id);
  const dispatch = useDispatch();

  useEffect(() => {
    const getElements = async () => {
      const findedUser = await userRequest.get(`user/find/${userID}`);
      const findedOrders = await userRequest.get(`orders/find/${userID}?new=true`);
      setUser(findedUser.data);
      setOrders(findedOrders.data);
    };
    getElements();
  }, [userID]);

  if(loader || !user || !orders) return <Loader />;

  return (
    <>
      <PageHeader data={{ id: "contact-hero", title: user.username, text: "¡Lorem ipsum dolor sit amet, consectetur!" }}/>
      <ProfileBanner user={user} orders={orders} dispatch={dispatch} />
      <Highlights carousel={true} products={products} />
      <Newsletter />
    </>
  )
}

export default ProfileScreen