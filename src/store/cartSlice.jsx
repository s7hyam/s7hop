import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialState,
    reducers: {
        cartIncrement: (state) => {
            state.value += 1
        },
        cartDecrement: (state) => {
            state.value -= 1
        },
        cartReset: (state) => {
            state.value = 0
        }
    }
})

export const { cartDecrement, cartIncrement, cartReset } = cartSlice.actions
export default cartSlice.reducer