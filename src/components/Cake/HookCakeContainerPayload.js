import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../Actions/CakeAction'

const HooksCakeContainerPayload = () => {
    const totalCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    const [num, setNum] = useState(1)
  return (
    <div>
        <h2>Num of Cakes - {totalCakes}</h2>
        <input type='text' onChange={e => setNum(e.target.value)} value={num}/>
        <button type='button' onClick={() => dispatch(buyCake(num))}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainerPayload