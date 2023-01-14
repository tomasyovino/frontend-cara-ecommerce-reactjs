import { PageHeader, Highlights, Pagination, Newsletter } from "../components";

const ShopScreen = ({ products }) => {
  const pageHeaderData = {
    id: "shop-hero",
    title: "quedateencasa",
    text: "¡Ahorre más con los cupones y hasta 70% de descuento!"
  }

  return (
    <>
        <PageHeader data={pageHeaderData} />
        <Highlights products={products} />
        <Pagination />
        <Newsletter />
    </>
  )
}

export default ShopScreen