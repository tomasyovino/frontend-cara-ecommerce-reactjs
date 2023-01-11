import { Footer, Header, OrdersContainer, Highlights } from "../components"

const OrderScreen = () => {
  return (
    <>
        <Header />
        <OrdersContainer orders={orders} />
        <Highlights carousel={true} />
        <Footer />
    </>
  )
}

export default OrderScreen

const orders = [
    {
      _id: "337860371",
      userId: "asdasdaposm",
      products: [
        {
          file: [{
            imgUrl: "https://res.cloudinary.com/dtyrld6tv/image/upload/v1673125494/cara-ecommerce/f3_u61xfg.jpg",
            color: "Flores de primavera",
          }],
          name: "Camiseta con dibujos",
          quantity: 1,
          price: 780
        },
        {
          file: [{
            imgUrl: "https://res.cloudinary.com/dtyrld6tv/image/upload/v1673125494/cara-ecommerce/f3_u61xfg.jpg",
            color: "Flores de primavera",
          }],
          name: "Camiseta con dibujos",
          quantity: 1,
          price: 780
        }
      ],
      amount: 1560,
      status: "Delivered",
      createdAt: "10/1/2023"
    },
    {
      _id: "337860652",
      userId: "asdasdaposm",
      products: [
        {
          file: [{
            imgUrl: "https://res.cloudinary.com/dtyrld6tv/image/upload/v1673125494/cara-ecommerce/n4_whlkjk.jpg",
            color: "Flores de primavera",
          }],
          name: "Camiseta con dibujos",
          quantity: 1,
          price: 780
        },
        {
          file: [{
            imgUrl: "https://res.cloudinary.com/dtyrld6tv/image/upload/v1673125494/cara-ecommerce/f3_u61xfg.jpg",
            color: "Flores de primavera",
          }],
          name: "Camiseta con dibujos",
          quantity: 2,
          price: 780
        }
      ],
      amount: 1560,
      status: "Pending...",
      createdAt: "10/1/2023"
    },
    {
      _id: "337860999",
      userId: "asdasdaposm",
      products: [
        {
          file: [{
            imgUrl: "https://res.cloudinary.com/dtyrld6tv/image/upload/v1673125494/cara-ecommerce/n6_m4cbhq.jpg",
            color: "Flores de primavera",
          }],
          name: "Camiseta con dibujos",
          quantity: 2,
          price: 780
        },
      ],
      amount: 1560,
      status: "Pending...",
      createdAt: "10/1/2023"
    }
  ];