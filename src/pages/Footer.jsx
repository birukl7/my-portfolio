import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <footer className='py-3 mt- flex items-center justify-center gap-x-7 dark:text-white'>
      <div className='flex flex-col items-center'>
        <h5>@2024 Biruk Lemma</h5>
        <h5>Inspired by Bolby website theme</h5>
        <h5>Build by Biruk with ❤️</h5>
      </div>
      <div>
        <a href="#home">
        <FontAwesomeIcon icon={faArrowUp} className='outline outline-1  p-1 rounded-sm' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
