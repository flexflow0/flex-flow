import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './Features/API/baseApi'

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})