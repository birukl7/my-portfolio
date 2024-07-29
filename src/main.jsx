import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Project from './pages/Project.jsx'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  errorElement: <NotFoundPage />,
  },{
    path: '/works/health-guard',
    element: <Project />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// reportWebVitals();