
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://flex-flow-server.vercel.app' }),
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
        updateUser: builder.mutation({
            query: (upData) => ({
                url: "/user/update",
                method: "PATCH",
                body: upData
            })
        }),
        getPaymentHistory: builder.query({
            query: (email) => `/payment-history?email=${email}`
        }),
        getAdmin: builder.query({
            query: (email) => `/users/admin/${email}`
        }),
        setWatchHistory: builder.mutation({
            query: (watchData) => ({
                url: "/watch-history",
                method: "PATCH",
                body: watchData
            })
        }),
        getWatchHistory: builder.query({
            query: (email) => `/watch-history/${email}`
        }),

        deleteAllHistory: builder.mutation({
            query: (email) => ({
                url: `/delete-history?email=${email}`,
                method: "PATCH",
            })
        }),
        deleteHistoryByID: builder.mutation({
            query: (data) => ({
                url: `/delete-historyByID`,
                method: "PATCH",
                body: data
            })
        }),

        getSingleMovie: builder.query({
            query: (id)=> `/singleMovie/${id}`
        })
        
    })

})

export const { useGetUsersQuery, useSetUserMutation, useUpdateUserMutation, useGetPaymentHistoryQuery, useGetAdminQuery, useSetWatchHistoryMutation, useGetWatchHistoryQuery, useDeleteAllHistoryMutation, useDeleteHistoryByIDMutation,useGetSingleMovieQuery } = baseApi

