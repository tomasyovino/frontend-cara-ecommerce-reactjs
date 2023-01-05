import f1 from "../../assets/img/products/f1.jpg";
import f2 from "../../assets/img/products/f2.jpg";
import f3 from "../../assets/img/products/f3.jpg";
import f4 from "../../assets/img/products/f4.jpg";
import f5 from "../../assets/img/products/f5.jpg";
import f6 from "../../assets/img/products/f6.jpg";
import f7 from "../../assets/img/products/f7.jpg";
import f8 from "../../assets/img/products/f8.jpg";
import { Link } from "react-router-dom";

const newArrivals_products = [
  {
    img: f1,
    brand: "adidas",
    name: "Camisas de dibujos",
    price: "780",
    slug: "/product/1"
  },
  {
    img: f2,
    brand: "adidas",
    name: "Camisas de dibujos",
    price: "780",
    slug: "/product/1"
  },
  {
    img: f3,
    brand: "adidas",
    name: "Camisas de dibujos",
    price: "780",
    slug: "/product/1"
  },
  {
    img: f4,
    brand: "adidas",
    name: "Camisas de dibujos",
    price: "780",
    slug: "/product/1"
  },
  {
    img: f5,
    brand: "adidas",
    name: "Camisas de dibujos",
    price: "780",
    slug: "/product/1"
  },
  {
    img: f6,
    brand: "adidas",
    name: "Camisas de dibujos",
    price: "780",
    slug: "/product/1"
  },
  {
    img: f7,
    brand: "adidas",
    name: "Camisas de dibujos",
    price: "780",
    slug: "/product/1"
  },
  {
    img: f8,
    brand: "adidas",
    name: "Camisas de dibujos",
    price: "780",
    slug: "/product/1"
  },
]

const NewArrivals = () => {
  return (
    <section id="newArrivals" className="product1 section-p1">
        <h2>Ingresos Recientes</h2>
        <p>Colección de verano - Nuevo Diseño de Morden</p>
        <div className="pro-container">
          {
            newArrivals_products.map((product) => (
              <div className="pro">
                <img src={product.img} alt="Product" />
                <div className="description">
                  <span>{product.brand}</span>
                  <h5>{product.name}</h5>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <h4>{product.price}</h4>
                  </div>
                  <Link to={product.slug}><i className="fa-solid fa-shopping-cart cart"></i></Link>
                </div> 
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default NewArrivals