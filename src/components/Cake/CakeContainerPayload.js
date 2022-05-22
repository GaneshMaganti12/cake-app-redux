import React, {useState} from 'react'
import { buyCake } from '../Actions/CakeAction'
import {connect} from "react-redux"

const CakeContainerPayload = (props) => {
    const[number, setNumber] = useState(1)
  return (
    <div>
        <h2>Number Of Cakes - {props.totalCakes}</h2>
        <input type='text' onChange={(e) => setNumber(e.target.value)} value={number}/>
        <button type='button' onClick={() => props.buyCake(number)}>Buy Cake {number}</button>
    </div>
  )
}

const mapStateTOProps = (state) =>{
  return{
    totalCakes: state.cake.numberOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake : (number) => dispatch(buyCake(number))
  }
}

export default connect(mapStateTOProps, mapDispatchToProps)(CakeContainerPayload)