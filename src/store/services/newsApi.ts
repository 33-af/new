import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CategoriesApiResponse, NewsApiResponse, ParamsType } from '../../interfaces';
import { setNews } from '../slices/newsSlice';


const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.currentsapi.services/v1/';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getNews: builder.query<NewsApiResponse, ParamsType>({
            //отменяем кеширование
            keepUnusedDataFor: 0,
            query: (params) => {
                const { page_number = 1, page_size = 10, category, keywords } = params || {};
                return {
                    url: 'latest-news',
                    params: {
                        apiKey: API_KEY,
                        page_number,
                        page_size,
                        category,
                        keywords,
                    },
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                    },
                };
            },
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled
                const data = result.data;
                dispatch(setNews(data.news))
            }
        }),
        getLatestNews: builder.query<NewsApiResponse, null>({
            query: () => {
                return {
                    url: 'search',
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
        }),
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



export const { useGetNewsQuery, useGetLatestNewsQuery, useGetCategoriesQuery } = newsApi;