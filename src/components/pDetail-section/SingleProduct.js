const SingleProduct = ({ products }) => {
  return (
    <section id="proDetails" className="proDetails section-p1">
        <div className="single-pro-img">
            <img src={products[0].file[0].imgUrl} width="100%" id="mainImg" alt="Producto" />
            <div className="sm-img-group">
                {
                    products[0].file.map((f) => (
                        <div className="sm-img-column" key={f._id}> 
                            <img src={f.imgUrl} className="sm-img" width="100%" alt="Producto seleccionable" />
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="single-pro-details">
            <h6>Inicio /</h6>
            <h4>{products[0].name}</h4>
            <h2>${products[0].price}</h2>
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
            <span>{products[0].desc}</span>
        </div>
    </section>
  )
}

export default SingleProduct