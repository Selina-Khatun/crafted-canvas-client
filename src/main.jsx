import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './routes/Routes';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>
      <FirebaseProvider>
      <ThemeProvider>
      <RouterProvider router={router} />
      </ThemeProvider>  
      </FirebaseProvider>
    </HelmetProvider>


  </React.StrictMode>,
)
