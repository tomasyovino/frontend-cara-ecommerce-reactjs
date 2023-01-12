import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { publicRequest } from "../api/request";
import { Header, SingleProduct, Highlights, Newsletter, Footer } from "../components";

const ProductDetailScreen = ({ products }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  
  const [ product, setProduct ] = useState(null);
  
  useEffect(() => {
    const getProduct = async (id) => {
      const res = await publicRequest.get(`products/find/${id}`)
      setProduct(res.data);
    };
    getProduct(id);
  }, [id]);

  return (
    product &&
    <>
        <Header />
        <SingleProduct product={product} />
        <Highlights carousel={true} products={products} />
        <Newsletter />
        <Footer />
    </>
  )
}

export default ProductDetailScreen