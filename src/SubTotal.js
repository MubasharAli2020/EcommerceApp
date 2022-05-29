import React from 'react'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import './SubTotal.css';
import {getBasketTotal} from './reducer';
function SubTotal() {
   const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            <h5>SubTotal ({basket.length}) items : {getBasketTotal(basket)} $</h5>
        </div>
    )
}

export default SubTotal
