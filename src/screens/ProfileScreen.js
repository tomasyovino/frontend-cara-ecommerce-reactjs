import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from "../api/request";
import { PageHeader, ProfileBanner,Highlights, Newsletter } from "../components";
import orders from "../data/orders.json";

const ProfileScreen = ({ products }) => {
  const [ user, setUser ] = useState({});
  const userID = useSelector((state) => state.user.currentUser._id);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const res = await userRequest.get(`user/find/${userID}`);
      setUser(res.data);
    };
    getUser();
  }, [userID]);
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