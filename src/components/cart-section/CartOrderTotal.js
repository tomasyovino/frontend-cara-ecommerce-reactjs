import { Link } from "react-router-dom"
import { PayButton } from "../"

const CartOrderTotal = ({ cartAmount }) => {
  return (
    <section id="cart-add" className="cart-add section-p1">
        {
            cartAmount && cartAmount.products.length > 0
                ?
                    <div id="subtotal" className='subtotal'>
                        <h3>Total</h3>
                        <table>
                            <tr>
                                <td>Subtotal</td>
                                <td>${cartAmount.total}</td>
                            </tr>
                            <tr>
                                <td>Envío</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td><strong>Total</strong></td>
                                <td><strong>${cartAmount.total}</strong></td>
                            </tr>
                        </table>
                        <PayButton cartAmount={cartAmount} />
                    </div>
                :
                    <div className="no-items-on-cart">
                        <div>
                            <h3>¡Todavía no ha agregado productos a su carrito!</h3>
                            <Link to={"/shop"}>Seguir Comprando</Link>
                        </div>
                    </div>
        }
    </section>
  )
}

export default CartOrderTotal