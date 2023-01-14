import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../api/request";

const PayButton = ({ cartAmount }) => {
    const [ stripeToken, setStripeToken ] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    };
    console.log(stripeToken)
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post(
                    "http://localhost:5000/api/checkout/payment", {
                        tokenId: stripeToken.id,
                        amount: cartAmount.total * 100,
                    }
                );
                console.log(res.data);
            } catch (err) {
                console.log(err)
            };
        };

        stripeToken && makeRequest();
    }, [stripeToken]);

    return (
        <div>
            <StripeCheckout
                name="Cara Shop"
                image="https://res.cloudinary.com/dtyrld6tv/image/upload/v1673193839/cara-ecommerce/logo_klv0ty.png"
                billingAddress
                shippingAddress
                description={`Tu total es de $${cartAmount.total}`}
                amount={cartAmount.total * 100}
                token={onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="normal">Comprar</button>
            </StripeCheckout>
        </div>
    )
}

export default PayButton