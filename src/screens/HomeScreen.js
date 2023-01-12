import { Header, HomeHero, Features, Highlights, Banner, NewArrivals, LowBanner, Newsletter, Footer } from "../components";
import features from "../data/features.json";

const HomeScreen = ({ products }) => {
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