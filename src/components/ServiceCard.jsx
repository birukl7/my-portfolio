import React from 'react'


function ServiceCard(props) {
  return (
    <div className='flex flex-col items-center rounded-xl overflow-hidden bg-slate-800 dark:bg-white transition duration-200 hover:-translate-y-3 shadow-xl'>
      <div className='h-48 w-full  bg-no-repeat bg-cover bg-center ' style={{backgroundImage: `url(${props.image})`}}>
        </div>
      <div className='p-3 pb-5'>
        <h3 className='font-semibold text-center py-2 font-Truculenta text-3xl'>{!props.title ? 'Web Development': props.title}</h3>
        <p className='px-3'>{!props.text ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, animi?' : props.text}</p>

        {/* <ul className='flex flex-col pt-5 pl-10 list-disc'>
          <li>{props.message1? props.message1: 'eCommerce Websites'}</li>
          <li>{props.message2? props.message2 : 'Web apps'}</li>
          <li>{props.message3? props.message3 : 'Custom Website'}</li>
        </ul> */}
      </div>
    </div>
  )
}

export default ServiceCard
