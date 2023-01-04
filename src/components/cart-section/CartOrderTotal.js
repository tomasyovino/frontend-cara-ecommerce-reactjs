import React from 'react'

const CartOrderTotal = () => {
  return (
    <section id="cart-add" className="cart-add section-p1">
        <div id="subtotal" className='subtotal'>
            <h3>Total</h3>
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>$3540</td>
                </tr>
                <tr>
                    <td>Envío</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>$3540</strong></td>
                </tr>
            </table>
            <button className="normal">Comprar</button>
        </div>
    </section>
  )
}

export default CartOrderTotal