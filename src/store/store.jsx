import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer: {
        cartSlice: cartSlice
    }
})

export default store