import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../Actions/CakeAction'

const HooksCakeContainer = () => {
    const totalCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of Cakes - {totalCakes}</h2>
        <button type='button' onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer