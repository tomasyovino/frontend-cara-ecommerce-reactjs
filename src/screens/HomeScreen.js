import { Header, HomeHero, Features, Highlights, Banner, NewArrivals, LowBanner, Newsletter, Footer } from "../components";
import products from "../data/products.json";
import features from "../data/features.json";

const HomeScreen = () => {
  
  return (
    <>
        <Header />
        <HomeHero />
        <Features data={features} />
        <Highlights products={products} />
        <Banner />
        <NewArrivals products={products} />
        <LowBanner />
        <Newsletter />
        <Footer />
    </>
  )
}

export default HomeScreen