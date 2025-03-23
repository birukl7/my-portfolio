import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function LanguageLinks({link, icon, className}) {
  return (
    <a href={link} target='_blank' >
      <FontAwesomeIcon className={ className + ' md:text-4xl text-2xl sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer language-link' } icon={icon}/>
    </a>
  )
}

export default LanguageLinks
