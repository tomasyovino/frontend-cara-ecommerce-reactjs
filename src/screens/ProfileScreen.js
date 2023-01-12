import { Footer, Header, PageHeader, ProfileBanner,Highlights, Newsletter } from "../components";
import orders from "../data/orders.json";
import products from "../data/products.json";

const user = {
  name: "Tomás Yovino",
  username: "Kaedel",
  email: "tomasyovino@gmail.com",
  address: "Arg, Bs As"
};

const ProfileScreen = () => {
  return (
    <>
        <Header />
        <PageHeader data={{ id: "contact-hero", title: user.username, text: "¡Lorem ipsum dolor sit amet, consectetur!" }}/>
        <ProfileBanner user={user} orders={orders} />
        <Highlights carousel={true} products={products} />
        <Newsletter />
        <Footer />
    </>
  )
}

export default ProfileScreen