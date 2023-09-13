
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/users"
        }),
        setUser: builder.mutation({
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user
            })
        }),
        getPaymentHistory: builder.query({
            query: (email) => `/payment-history?email=${email}`
        })
    })

})

export const { useGetUsersQuery, useSetUserMutation, useGetPaymentHistoryQuery } = baseApi