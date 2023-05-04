import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com",
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials: { username: string; password: string }) => ({
                url: "/auth/login",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }),
        }),

        registration: builder.mutation({
          query: (credentials: { username: string; password: string }) => ({
              url: "/auth/registration",
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
          }),
      }),
    }),
});

export const { useLoginMutation } = authApi;
