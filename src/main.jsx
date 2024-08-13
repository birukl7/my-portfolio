import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Project from './pages/Project.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'
import { SkeletonTheme } from 'react-loading-skeleton'
import { CountProvider } from './components/PageCountContext.jsx'
import MotionCard from './components/MotionCard.jsx'
import Big from './components/Big.jsx'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  errorElement: <NotFoundPage />,
  },
  {
    path: '/works/:id',
    element: <Project />
  },{
    path: '/dummy',
    element: <Big />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(

     <ThemeProvider>
      <CountProvider>
        <SkeletonTheme baseColor="#202020" highlightColor="#505050" >
          <RouterProvider router={router} />
        </SkeletonTheme>
      </CountProvider>
    </ThemeProvider>
  
)

// reportWebVitals();