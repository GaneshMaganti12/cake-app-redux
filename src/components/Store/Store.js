import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import reducer from "../Reducer/Reducer"
import iceCreamReducer from "../Reducer/IceCreamReducer"


const rootReducer = combineReducers({
    cake: reducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store