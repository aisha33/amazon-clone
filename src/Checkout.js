import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';



function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad" src="https://www.zingoy.com/blog/wp-content/uploads/2020/08/Ajio-Banner-Desktop__7__zxg132.jpg" alt="" />
                <div>
                    <h3> Hello, {user?.email}</h3>
                    <h2 className="checkout_title"> Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id} title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />

                    ))}


                </div>
            </div>
            <div className="checkout-right">
                <Subtotal />

            </div>

        </div>
    )
}
export default Checkout;