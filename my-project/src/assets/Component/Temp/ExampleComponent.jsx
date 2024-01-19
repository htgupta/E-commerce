import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { ADD_TO_CART } from './Action';

const dispatch=useDispatch()
const cart =useSelector((state)=>state.cart)

function handleAddtocart(){
    const product={id: 1, name: "product 1" , product};
    dispatch(ADD_TO_CART(product))
}
const ExampleComponent = () => {
  return (
    <div>
        <h2>Shopping Cart</h2>
        <button> onClick={handleAddtocart}add To Cart</button>
       
    </div>
  )
}
export default ExampleComponent
