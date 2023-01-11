import f1 from "../assets/img/products/f1.jpg";
import f2 from "../assets/img/products/f2.jpg";
import f3 from "../assets/img/products/f3.jpg";
import f4 from "../assets/img/products/f4.jpg";
import f5 from "../assets/img/products/f5.jpg";
import f6 from "../assets/img/products/f6.jpg";
import f7 from "../assets/img/products/f7.jpg";
import f8 from "../assets/img/products/f8.jpg";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const highlights_products = [
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

const Highlights = ({ carousel }) => {
  const responsive = {
    superLargeDesktop: {
        breakpoint: { max:4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
  };

  return (
    <section id="highlights" className="product1 section-p1">
      <h2>Productos destacados</h2>
      <p>Colección de verano - Nuevo Diseño de Morden</p>
      <div className={!carousel ? "pro-container" : undefined}>
      {
        !carousel
          ?
            <>
                {
                  highlights_products.map((product) => (
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
            </>
          : 
            <Carousel
              responsive={responsive} 
              infinite={true} 
              autoPlay={true} 
            >
              {
                highlights_products.map((product) => (
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
            </Carousel>
      }
      </div>
    </section>
  )
}

export default Highlights