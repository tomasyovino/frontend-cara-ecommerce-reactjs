import { useState, useEffect } from "react";
import { createBrowserHistory } from "@remix-run/router";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const PayButton = () => {
    const [ stripeToken, setStripeToken ] = useState(null);
    const history = createBrowserHistory();

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment", {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );
                console.log(res.data);
                history.push("/success");
            } catch (err) {
                console.log(err)
            };
        };

        stripeToken && makeRequest();
    }, [stripeToken, history]);

    return (
        <div>
            {
                stripeToken
                    ? <button className="normal">Procesando...</button>
                    :
                    <StripeCheckout
                        name="Cara Shop"
                        image="https://res.cloudinary.com/dtyrld6tv/image/upload/v1673193839/cara-ecommerce/logo_klv0ty.png"
                        billingAddress
                        shippingAddress
                        description="Your total is $20"
                        amount={2000}
                        token={onToken}
                        stripeKey={process.env.REACT_APP_STRIPE_KEY}
                    >
                        <button className="normal">Comprar</button>
                    </StripeCheckout>
            }
        </div>
    )
}

export default PayButton