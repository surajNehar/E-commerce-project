import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../features/Addtocartslice'

export const store = configureStore({
    reducer: cartReducer,
})