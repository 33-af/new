import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'; // Correct if your file is App.tsx

import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
