import React from "react";
import{CreateStore} from'redux'
import rootReducer from'./Reducer'
const Store =CreateStore( rootReducer)

export default Store