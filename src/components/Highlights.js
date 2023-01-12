import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Highlights = ({ carousel, products }) => {
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
                  products.map((product) => (
                    <div className="pro" key={product._id}>
                      <img src={product.file[0].imgUrl} alt={product.name} />
                      <div className="description">
                        <span>{product.brand}</span>
                        <h5>{product.name}</h5>
                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <h4>${product.price}</h4>
                        </div>
                        <Link to={`/products/${product._id}`}><i className="fa-solid fa-shopping-cart cart"></i></Link>
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
                products.map((product) => (
                  <div className="pro" key={product._id}>
                    <img src={product.file[0].imgUrl} alt={product.name} />
                    <div className="description">
                      <span>{product.brand}</span>
                      <h5>{product.name}</h5>
                      <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <h4>${product.price}</h4>
                      </div>
                      <Link to={`/products/${product._id}`}><i className="fa-solid fa-shopping-cart cart"></i></Link>
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