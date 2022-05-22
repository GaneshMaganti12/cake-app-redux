import React from 'react'
import { buyCake } from '../Actions/CakeAction'
import {connect} from "react-redux"

const CakeContainer = (props) => {
  return (
    <div>
        <h2>Number Of Cakes - {props.totalCakes}</h2>
        <button type='button' onClick={props.buyCake}>Buy Cake</button>
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
    buyCake : () => dispatch(buyCake())
  }
}

export default connect(mapStateTOProps, mapDispatchToProps)(CakeContainer)