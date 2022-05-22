const initialState = {
    numberOfCakes : 10
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'BUYCAKE': return {
            ...state, numberOfCakes : state.numberOfCakes - action.payload
        }
        default:
            return state
    }
}

export default reducer