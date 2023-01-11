import { Header, SingleProduct, Highlights, Newsletter, Footer } from "../components";

const ProductDetailScreen = () => {
  return (
    <>
        <Header />
        <SingleProduct />
        <Highlights carousel={true} />
        <Newsletter />
        <Footer />
    </>
  )
}

export default ProductDetailScreen