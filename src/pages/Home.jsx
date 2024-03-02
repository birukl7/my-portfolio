 import { useEffect, useState } from 'react'
import profilePicture from '/images/home-images/MY_LOGO (3).svg'
function Home() {
 const [theme, setTheme] = useState('dark')

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    console.log(theme)
  },[theme])

  const changeThemeMode = ()=>{
    setTheme(theme === 'dark'? 'light' : 'dark') 
    console.log(theme)
   // document.documentElement.classList.toggle('dark')
  }
  return (
    <div className=" bg-slate-900 dark:bg-slate-200 h-screen  text-slate-300">
      <header className="max-w-screen-xl my-0 mx-auto ">    
          <nav className='flex justify-between items-center py-3'>
            <div >
              <a href='#'><img src={profilePicture} className='w-28' alt="biruk" /></a>
            </div>
            <ul className='flex justify-between'>
              <li className='ml-0'> 
                <a href="#" className=' after:block transition-all duration-300 ease-linear after:w-0 after:transition-all after:duration-200 after:ease-linear after:h-0.5 after:rounded-sm hover:after:bg-yellow-300 hover:after:w-full hover:text-yellow-300'>Home</a>
              </li>
              <li className='ml-12'><a className=' after:block transition-all duration-300 ease-linear after:w-0 after:transition-all after:duration-200 after:ease-linear after:h-0.5 after:rounded-sm hover:after:bg-yellow-300 hover:after:w-full hover:text-yellow-300' href="#">About</a></li>
              <li className='ml-12'><a className=' after:block transition-all duration-300 ease-linear after:w-0 after:transition-all after:duration-200 after:ease-linear after:h-0.5 after:rounded-sm hover:after:bg-yellow-300 hover:after:w-full hover:text-yellow-300' href="#">Services</a></li>
              <li className='ml-12'><a className=' after:block transition-all duration-300 ease-linear after:w-0 after:transition-all after:duration-200 after:ease-linear after:h-0.5 after:rounded-sm hover:after:bg-yellow-300 hover:after:w-full hover:text-yellow-300' href="#">Experience</a></li>
              <li className='ml-12'><a className=' after:block transition-all duration-300 ease-linear after:w-0 after:transition-all after:duration-200 after:ease-linear after:h-0.5 after:rounded-sm hover:after:bg-yellow-300 hover:after:w-full hover:text-yellow-300' href="#">Works</a></li>
              <li className='ml-12'><a className=' after:block transition-all duration-300 ease-linear after:w-0 after:transition-all after:duration-200 after:ease-linear after:h-0.5 after:rounded-sm hover:after:bg-yellow-300 hover:after:w-full hover:text-yellow-300' href="#">Blog</a></li>
              <li className='ml-12'><a className=' after:block transition-all duration-300 ease-linear after:w-0 after:transition-all after:duration-200 after:ease-linear after:h-0.5 after:rounded-sm hover:after:bg-yellow-300 hover:after:w-full hover:text-yellow-300' href="#">Contact</a></li>
              <li> <button className='px-5 bg-slate-100  text-slate-900' onClick={changeThemeMode}>dark name</button></li>
            </ul>

          </nav>
      </header>
    </div>
  )
}

export default Home
