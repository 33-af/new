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

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.currentsapi.services/v1/';

export const getNews = async ({ page_number = 1, page_size = 10, category = null }) => {
  try {
    console.log('Fetching news with params:', { page_number, page_size, category }); // Log parameters
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
      },
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    console.log('API response:', response.data); // For debugging
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return null;
  }
};

export const getCategories = async () => {
  try {
    console.log('Fetching categories');
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      },
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    console.log('API response:', response.data); // For debugging
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return null;
  }
};
