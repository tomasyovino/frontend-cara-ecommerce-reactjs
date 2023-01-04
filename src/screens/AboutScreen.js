import { Header, PageHeader, AboutHead, AboutApp, Features, Footer } from "../components";
import f1 from "../assets/img/features/f1.png";
import f2 from "../assets/img/features/f2.png";
import f3 from "../assets/img/features/f3.png";
import f4 from "../assets/img/features/f4.png";
import f5 from "../assets/img/features/f5.png";
import f6 from "../assets/img/features/f6.png";

const fe_box = [
  {
    img: f1,
    text: "Envío gratuito"
  },
  {
    img: f2,
    text: "Pedido en línea"
  },
  {
    img: f3,
    text: "Ahorra tu dinero"
  },
  {
    img: f4,
    text: "Promociones"
  },
  {
    img: f5,
    text: "Grandes ventas"
  },
  {
    img: f6,
    text: "Soporte 24/7"
  },
]

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
        <Features data={fe_box} />
        <Footer />
    </>
  )
}

export default AboutScreen