import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    counter: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment:(state, action) => {
            state.counter = state.counter + 1
        }, 
        decrement: (state, action) => {
            state.counter = state.counter - 1
        }
    }
})

const {reducer, actions} = counterSlice
// reducer holds the object from initial state and actions holds the reducers and its function and they are increment and decrement. 

export const {increment, decrement} = actions
export default reducer