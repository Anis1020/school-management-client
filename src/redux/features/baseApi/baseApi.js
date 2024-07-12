import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    // baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => "/posts",
    }),
    getUser: builder.query({
      query: () => ({
        url: "/users",
      }),
    }),
    getPostById: builder.query({
      query: (id) => `/post/${id}`,
    }),
    setPost: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
    }),
    updateData: builder.mutation({
      query: ({ id, data }) => ({
        url: `/posts/${id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetPostQuery,
  useGetPostByIdQuery,
  useSetPostMutation,
  useUpdateDataMutation,
} = baseApi;
export default baseApi;
