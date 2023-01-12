import { Header, PageHeader, Highlights, Pagination, Newsletter, Footer } from "../components";

const ShopScreen = ({ products }) => {
  const pageHeaderData = {
    id: "shop-hero",
    title: "quedateencasa",
    text: "¡Ahorre más con los cupones y hasta 70% de descuento!"
  }

  return (
    <>
        <Header />
        <PageHeader data={pageHeaderData} />
        <Highlights products={products} />
        <Pagination />
        <Newsletter />
        <Footer />
    </>
  )
}

export default ShopScreen