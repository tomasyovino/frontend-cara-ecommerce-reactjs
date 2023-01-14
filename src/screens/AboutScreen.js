import { PageHeader, AboutHead, AboutApp, Features } from "../components";
import features from "../data/features.json";

const AboutScreen = () => {
  const pageHeaderData = {
    id: "about-hero",
    title: "conócenos",
    text: "¡Lorem ipsum dolor sit amet, consectetur!"
  }

  return (
    <>
        <PageHeader data={pageHeaderData} />
        <AboutHead />
        <AboutApp />
        <Features data={features} />
    </>
  )
}

export default AboutScreen