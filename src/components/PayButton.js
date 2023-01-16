import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../api/request";
import { buyHandler } from "../redux/apiCalls";

const PayButton = ({ cart, userID, dispatch }) => {
    const [ stripeToken, setStripeToken ] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const paymentRequest = async () => {
            try {
                await userRequest.post( "checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                await createOrder(userID, cart);
                buyHandler(dispatch);
            } catch (err) {
                console.log(err);
            };
        };

        const createOrder = async (userID, cart) => {
            try {
                await userRequest.post("orders", {
                    userId: userID,
                    products: cart.products,
                    amount: cart.total
                });
            } catch (err) {
                console.log(err);
            };
        };

        stripeToken && paymentRequest();
    }, [stripeToken]);

    return (
        <div>
            <StripeCheckout
                name="Cara Shop"
                image="https://res.cloudinary.com/dtyrld6tv/image/upload/v1673193839/cara-ecommerce/logo_klv0ty.png"
                billingAddress
                shippingAddress
                description={`Tu total es de $${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="normal">Comprar</button>
            </StripeCheckout>
        </div>
    )
}

export default PayButton