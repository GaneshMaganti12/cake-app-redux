import React from 'react'
import { buyIceCream } from '../Actions/IceCreamAction'
import {connect} from "react-redux"

const IceCreamContainer = (props) => {
  return (
    <div>
        <h2>Number Of Ice-Creams - {props.totalIceCreams}</h2>
        <button type='button' onClick={props.buyIce}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateTOProps = (state) =>{
  return{
    totalIceCreams: state.iceCream.numberOfIceCreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIce : () => dispatch(buyIceCream())
  }
}

export default connect(mapStateTOProps, mapDispatchToProps)(IceCreamContainer)