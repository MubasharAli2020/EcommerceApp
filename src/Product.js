import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './Product.css';
import {useStateValue} from './StateProvider';
function Product({id,rating,desc,price,image,product}) {
   const [initialState,dispatch] = useStateValue();
    const addToBasket =()=>{
        dispatch({
           type: 'ADD_TO_BASKET',
            item:{
                id:id,
                price:price,
                rating:rating,
                desc:desc,
                image:image,
                product:product
            }
        })
    }
    return (
        <div className="product">
             <div class="product-card">
		<div class="badge">Hot</div>
		<div class="product-tumb">
			<img src={image} alt="" />
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="#">{product}</a></h4>
			<p>{desc}</p>
            <div className="product__rating py-2">
              {Array(rating)
              .fill()
              .map((_) => {
                  return(
                      <StarIcon className="product__ratingIcon" />
                  )
              })
              }
             </div>
			<div class="product-bottom-details">
				<div class="product-price">${price}</div>
				<div class="product-links">
					{/* <a href=""><i class="fa fa-heart"></i></a> */}
					<a href="#" type="submit" onClick={addToBasket}><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>


















                

        {/* <div className="product-info">
            <p>{desc}</p>
             
             <div className="product__price">
              <small>$</small>
              <strong>{price}</strong>
             </div>

             <div className="product__rating">
              {Array(rating)
              .fill()
              .map((_) => {
                  return(
                      <StarIcon className="product__ratingIcon" />
                  )
              })
              }
             </div>
            </div>
            <img src={image} alt="no" />
            <button type="submit" onClick={addToBasket}>Add to Basket</button> */}

        </div>
    )
}

export default Product
