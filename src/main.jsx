import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Project from './pages/Project.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  errorElement: <NotFoundPage />,
  },
  {
    path: '/works/:id',
    element: <Project />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)

// reportWebVitals();