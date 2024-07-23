import { newsApi } from "@/entitites/news/api/newsApi";
import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from '@/entitites/news/model/newsSlice'
import { categoriesApi } from "@/entitites/category/api/categoriesApi";


export const rootReducer = combineReducers({
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  });