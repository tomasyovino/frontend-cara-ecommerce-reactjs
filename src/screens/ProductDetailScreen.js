import { Header, SingleProduct, Highlights, Newsletter, Footer } from "../components";
import products from "../data/products.json";

const ProductDetailScreen = () => {
  return (
    <>
        <Header />
        <SingleProduct products={products} />
        <Highlights carousel={true} products={products} />
        <Newsletter />
        <Footer />
    </>
  )
}

export default ProductDetailScreen