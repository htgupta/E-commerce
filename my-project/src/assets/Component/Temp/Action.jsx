export const ADD_TO_CART ="ADD_TO_CART";
export const REMOVE_TO_CART ="REMOVE_TO_CART";
export const CLEAR_CART ="CLEAR_CART";
// action creator

const addToCart=(product)=>(
    {
        type:ADD_TO_CART,
        payload:product,
    }
)
const removeToCart=()=> ({
    type:REMOVE_TO_CART,
    payload:productId,
}
)
const clearToCart=()=>(
    {
        type:CLEAR_CART,
        payload:product,
    }
)