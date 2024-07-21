// import axios from 'axios';

// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
// const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.currentsapi.services/v1';

// export const getNews = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/latest-news`, {
//       params: {
//         apiKey: API_KEY,
//       },
//       headers: {
//         'Cache-Control': 'no-cache',
//       },
//     });

//     console.log('API response:', response.data); // Добавлено для отладки
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     return null; // Return null if there's an error
//   }
// };

// import axios from 'axios';

// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
// const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.currentsapi.services/v1';

// export const getNews = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/latest-news`, {
//       params: {
//         apiKey: API_KEY,
//       },
//       headers: {
//         'Cache-Control': 'no-cache',
//       },
//     });

//     console.log('API response:', response.data); // Добавлено для отладки
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     return null; // Return null if there's an error
//   }
// };
import axios from 'axios';
import {  CategoriesApiResponse, NewsApiResponse, ParamsType } from '../interfaces';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.currentsapi.services/v1/';


export const getNews = async (params?: ParamsType) : Promise<NewsApiResponse> => {
  try {
    const {
      page_number = 1,
  page_size = 10,
  category,
  keywords,
    } = params || {};
    const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
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
        'X-Requested-With': 'XMLHttpRequest', // Add this header
      },
    });

    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    
    return {news: [], page: 1, status: 'error'};
  }
};

export const getLatestNews = async (): Promise<NewsApiResponse> => {
  try {
    const response = await axios.get<NewsApiResponse>(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest', // Add this header
      },
    });

    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {news: [], page: 1, status: 'error'};
  }
};

export const getCategories = async () : Promise<CategoriesApiResponse> => {
  try {
    console.log('Fetching categories');
    const response = await axios.get<CategoriesApiResponse>(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      },
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest', // Add this header
      },
    });

    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {categories: [], description: '', status: 'error'};
  }
};