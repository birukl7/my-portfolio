import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <footer className='py-10'>
      <div>
        <h5>@2024 Biruk Lemma</h5>
        <h5>Inspired by Bolby website theme</h5>
        <h5>Build by Biruk with ❤️</h5>
      </div>
      <div>
        <FontAwesomeIcon icon={faArrowUp}/>
      </div>
    </footer>
  )
}

export default Footer
