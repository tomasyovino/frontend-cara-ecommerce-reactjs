import { removeProductFromCart } from "../../redux/apiCalls"

const CartTable = ({ cartProducts, dispatch }) => {
  return (
    <section id="cart" className="cart section-p1">
        <table width="100%">
            <thead>
                <td>ELIMINAR</td>
                <td>IMAGEN</td>
                <td>PRODUCTO</td>
                <td>PRECIO</td>
                <td>CANTIDAD</td>
                <td>SUBTOTAL</td>
            </thead>
            <tbody>
                {
                    cartProducts && cartProducts.length > 0 
                        ?
                            cartProducts.map((product, index) => (
                                <tr key={index}>
                                    <td><button onClick={() => removeProductFromCart(dispatch, product)}><i className="fa fa-times" aria-hidden="true"></i></button></td>
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