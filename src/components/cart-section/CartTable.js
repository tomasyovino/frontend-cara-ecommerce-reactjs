import f1 from "../../assets/img/products/f1.jpg";
import f2 from "../../assets/img/products/f2.jpg";
import f3 from "../../assets/img/products/f3.jpg";
import { Link } from "react-router-dom";

const CartTable = () => {
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
                <tr>
                    <td><Link to="/"><i className="fa fa-times" aria-hidden="true"></i></Link></td>
                    <td><img src={f1} alt="Product" /></td>
                    <td>Camisas de dibujos</td>
                    <td>$1180</td>
                    <td><input type="number" value="1" /></td>
                    <td>$1180</td>
                </tr>
                <tr>
                    <td><Link to="/"><i className="fa fa-times" aria-hidden="true"></i></Link></td>
                    <td><img src={f2} alt="Product" /></td>
                    <td>Camisas de dibujos</td>
                    <td>$1180</td>
                    <td><input type="number" value="1" /></td>
                    <td>$1180</td>
                </tr>
                <tr>
                    <td><Link to="/"><i className="fa fa-times" aria-hidden="true"></i></Link></td>
                    <td><img src={f3} alt="Product" /></td>
                    <td>Camisas de dibujos</td>
                    <td>$1180</td>
                    <td><input type="number" value="1" /></td>
                    <td>$1180</td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

export default CartTable