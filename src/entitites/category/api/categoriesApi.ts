import { CategoriesApiResponse } from "..";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.currentsapi.services/v1/';

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getCategories: builder.query<CategoriesApiResponse, null>({
            query: () => {
                return {
                    url: 'available/categories',
                    params: {
                        apiKey: API_KEY,
                    },
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest', // Add this header
                    },
                };
            },
        })
    }),
})



export const {  useGetCategoriesQuery } = categoriesApi;