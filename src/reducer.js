import React from 'react';
export const initialState = {
    basket:[]

}

export const getBasketTotal = (basket) => basket?.reduce((prev,next)=>prev+next.price,0)


const reducer = (state,action) => {
     
   switch(action.type){
       case 'ADD_TO_BASKET':
        
       return {
       
           ...state,
           basket:[...state.basket,action.item]
       }
      
       break;

       case 'REMOVE_FROM_BASKET':
       let newBasket = [...state.basket];
       const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id);
    //    (state.basket.findIndex((basketItem)=>console.log(basketItem)));
        if(index >= 0){
           
            newBasket.splice(index,1);
            
        }
       return {...state,basket:newBasket};
       break;
       
       default:
       return state
       break;

   }
  
}

export default reducer;