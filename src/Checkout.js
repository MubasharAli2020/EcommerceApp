import React from 'react'
import './checkout.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import CurrencyFormat from 'react-currency-format';
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className='container'>
        <div className="checkout row">
        <div className="col">
            
            {basket?.length === 0 ? (
                <h3 className="checkout__title">There is no Item in Basket</h3>
            ): 
            (
               <div>
                   <h3 className="checkout__basketBannner"> {basket.length} items in basket</h3>
                   {basket.map(item=>{
                       return(
                        <CheckoutProduct
                         id={item.id}
                         rating={item.rating}
                         image={item.image}
                         desc={item.desc}
                         price={item.price}
                         />
                       );
                   })}
               </div> 
            )
            }
            </div>
                 {basket.length > 0 && (
                 <div className="col">
                     <SubTotal />
                 </div>
                 )}
        </div>
        </div>
    )
}

export default Checkout;
