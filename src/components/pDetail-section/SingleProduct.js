import { useState, useEffect } from "react";

const SingleProduct = ({ product }) => {
    const [ qty, setQty ] = useState(1);
    const [ size, setSize ] = useState(null);
    const [ productFile, setProductFile ] = useState(product.file[0]);

    useEffect(() => {
      if(product) setProductFile(product.file[0]);
      setQty(1);
      setSize(null);
    }, [product])
    
    const handleQuantity = (type) => {
        if(type === "dec") {
            if(qty > 1) setQty(qty - 1);
        } else {
            if(qty < 10) setQty(qty + 1);
        };
    };

    // const handleAddToCart = () => {

    // };

    return (
        <>
            {
                product 
                    ?
                        <section id="proDetails" className="proDetails section-p1">
                            <div className="single-pro-img">
                                <img src={productFile.imgUrl} width="100%" id="mainImg" alt={productFile?.color}/>
                                <div className="sm-img-group">
                                    {
                                        product.file.map((f, index) => (
                                            <div className="sm-img-column" key={f._id}> 
                                                <img src={f.imgUrl} className="sm-img" width="100%" alt={f.color} onClick={() => setProductFile(product.file[index])} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="single-pro-details">
                                <h6>Inicio /</h6>
                                <h4>{product.name}</h4>
                                <h2>${product.price}</h2>
                                <select onChange={(e) => setSize(e.target.value)}>
                                    <option>Select Size</option>
                                    <option value="xl">XL</option>
                                    <option value="xxl">XXL</option>
                                    <option value="small">Small</option>
                                    <option value="large">Large</option>
                                </select>
                                <div>
                                    <button className="dec-btn" onClick={() => handleQuantity("dec")} >-</button>
                                    <span>{qty}</span>
                                    <button className="inc-btn" onClick={() => handleQuantity("inc")} >+</button>
                                </div>
                                <button className="normal">Agregar al Carrito</button>
                                <h4>Detalles del Producto</h4>
                                <span>{product.desc}</span>
                            </div>
                        </section>
                : <span>cargando...</span>
            }
        </>
  );
};

export default SingleProduct;