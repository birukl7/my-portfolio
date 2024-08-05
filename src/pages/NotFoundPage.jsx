import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage({work}) {
  return (
<section class="dark:bg-white bg-gray-900 h-screen flex items-center justify-center font-Truculenta">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl dark:text-primary-600 text-primary-500">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold dark:text-gray-900 md:text-4xl text-white">Page not found.</p>
            <p class="mb-4 text-lg font-light dark:text-gray-500 text-gray-400">Sorry, I can't find that page. You'll find lots to explore on the home page. </p>
            <Link to='/' class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none dark:focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-900 my-4">Back to Homepage</Link>
        </div>   
    </div>
</section>
  )
}

export default NotFoundPage
