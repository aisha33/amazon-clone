import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';


function Subtotal() {
    const history = useHistory();
    const [{ basket }, dipatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            suptotal({basket.length} items):<strong> {value} </strong>
                        </p>

                        <small className="subtotal_gift">

                            <input type="checkbox" /> This order contains as gift
                </small>
                    </>

                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"} thousandSeprator={true}
                prefix={"$"}

            />
            <button onClick={e => history.push('/Payment')}>Proceed to Checkout</button>
        </div>
    );
}
export default Subtotal;