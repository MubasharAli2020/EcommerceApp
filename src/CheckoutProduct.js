import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';
function CheckoutProduct({id,image,rating,desc,price}) {
    const [{basket},dispatch] = useStateValue();
    const removeBasket = () => {
       dispatch({
           type:'REMOVE_FROM_BASKET',
           id:id
       })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />
            <div className="checkoutProduct__info">
                   <p className="checkoutProduct__title">{desc}</p>
                  
                  <div className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                 </div>

            <div className="checkoutProduct__rating">
              
              {Array(rating)
              .fill()
              .map((_) => {
                  return(
                      <StarIcon className="checkoutProduct__ratingIcon" />
                  )
              })
              }

             </div>
             <button type="submit" onClick={removeBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
