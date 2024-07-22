import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'; // Correct if your file is App.tsx
import { Provider } from 'react-redux';

import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx';
import { store } from './store/index.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
