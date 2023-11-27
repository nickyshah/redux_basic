import React from 'react'
import {increment, decrement} from "./counterSlice"
import { useDispatch } from 'react-redux'


export const Buttons = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() =>dispatch(decrement()) }>-</button>
            <button onClick={() =>dispatch(increment())}>+</button>
        </div>
    )
}
