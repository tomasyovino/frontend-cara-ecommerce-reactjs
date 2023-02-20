import { HomeHero, Features, Highlights, Banner, NewArrivals, LowBanner, Newsletter, Loader } from "../components";
import features from "../data/features.json";

const HomeScreen = ({ products, loader }) => {


  if(loader) return <Loader />;

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