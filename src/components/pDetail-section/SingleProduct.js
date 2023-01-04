import f1 from "../../assets/img/products/f1.jpg";
import f2 from "../../assets/img/products/f2.jpg";
import f3 from "../../assets/img/products/f3.jpg";
import f4 from "../../assets/img/products/f4.jpg";

const SingleProduct = () => {
  return (
    <section id="proDetails" className="proDetails section-p1">
        <div className="single-pro-img">
            <img src={f1} width="100%" id="mainImg" alt="Producto" />
            <div className="sm-img-group">
                <div className="sm-img-column"> 
                    <img src={f1} className="sm-img" width="100%" alt="Producto seleccionable" />
                </div>
                <div className="sm-img-column"> 
                    <img src={f2} className="sm-img" width="100%" alt="Producto seleccionable" />
                </div>
                <div className="sm-img-column"> 
                    <img src={f3} className="sm-img" width="100%" alt="Producto seleccionable" />
                </div>
                <div className="sm-img-column"> 
                    <img src={f4} className="sm-img" width="100%" alt="Producto seleccionable" />
                </div>
            </div>
        </div>
        <div className="single-pro-details">
            <h6>Inicio / Camiseta</h6>
            <h4>Camiseta Fashion de Hombre</h4>
            <h2>$1390.00</h2>
            <select>
                <option>Select Size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>Small</option>
                <option>Large</option>
            </select>
            <input type="number" value="1" />
            <button className="normal">Agregar al Carrito</button>
            <h4>Detalles del Producto</h4>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, reiciendis molestiae commodi cum deserunt expedita sed nobis fugit vero amet autem laudantium earum dignissimos. Quidem nam ea molestias repellat voluptatum.
            Aliquam sunt quae saepe iure eligendi. Quia, ad. Quod in ratione suscipit nisi quibusdam eveniet officia molestiae harum ab illum inventore tenetur, error corporis. Obcaecati omnis eum similique ducimus dolorum.</span>
        </div>
    </section>
  )
}

export default SingleProduct