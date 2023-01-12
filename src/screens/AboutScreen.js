import { Header, PageHeader, AboutHead, AboutApp, Features, Footer } from "../components";
import features from "../data/features.json";

const AboutScreen = () => {
  const pageHeaderData = {
    id: "about-hero",
    title: "conócenos",
    text: "¡Lorem ipsum dolor sit amet, consectetur!"
  }

  return (
    <>
        <Header />
        <PageHeader data={pageHeaderData} />
        <AboutHead />
        <AboutApp />
        <Features data={features} />
        <Footer />
    </>
  )
}

export default AboutScreen