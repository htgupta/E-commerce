import { ADD_T0_CART,CLEAR_CART,REMOVE_TO_CART} from "./Action";
const initialState={
    cart:[]
}
const rootreducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_T0_CART:
        return{
            ...state,
            cart:[...state.cart,action,payload]
        }

        case REMOVE_TO_CART:
        return{
            ...state,
            cart:state.cart.filter((product)=>product.id !=action.payload)
        }

        case CLEAR_CART:
        return{
            ...state,
               cart:[]
        }


        
        default:
            break;
    }

}