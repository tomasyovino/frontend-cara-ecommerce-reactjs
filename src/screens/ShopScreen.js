import { PageHeader, Highlights, Pagination, Newsletter, Loader } from "../components";

const ShopScreen = ({ products, loader }) => {
  const pageHeaderData = {
    id: "shop-hero",
    title: "quedateencasa",
    text: "¡Ahorre más con los cupones y hasta 70% de descuento!"
  }

  if(loader) return <Loader />;

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