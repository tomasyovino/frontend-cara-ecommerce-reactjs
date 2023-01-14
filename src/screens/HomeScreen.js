import { HomeHero, Features, Highlights, Banner, NewArrivals, LowBanner, Newsletter } from "../components";
import features from "../data/features.json";

const HomeScreen = ({ products }) => {
  return (
    <>
      <HomeHero />
      <Features data={features} />
      <Highlights products={products} />
      <Banner />
      <NewArrivals products={products} />
      <LowBanner />
      <Newsletter />
    </>
  )
}

export default HomeScreen