import { Link } from "react-router-dom";

const CartTable = ({ cartProducts }) => {
  return (
    <section id="cart" className="cart section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>ELIMINAR</td>
                    <td>IMAGEN</td>
                    <td>PRODUCTO</td>
                    <td>PRECIO</td>
                    <td>CANTIDAD</td>
                    <td>SUBTOTAL</td>
                </tr>
            </thead>
            <tbody>
                {
                    cartProducts && cartProducts.length > 0 
                        ?
                            cartProducts.map((product) => (
                                <tr key={product._id}>
                                    <td><Link to="/"><i className="fa fa-times" aria-hidden="true"></i></Link></td>
                                    <td><img src={product.color.imgUrl} alt={product.name} /></td>
                                    <td>{`${product.name} (${product.size})`}</td>
                                    <td>{product.price}</td>
                                    <td><span>{product.quantity}</span></td>
                                    <td>{product.price * product.quantity}</td>
                                </tr>
                            ))
                        : null
                }
            </tbody>
        </table>
    </section>
  )
}

export default CartTable