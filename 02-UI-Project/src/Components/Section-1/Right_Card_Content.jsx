import React from 'react'

const Right_Card_Content = (Props) => {
  return (
    <div className='absolute top-0 left-0 h-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{Props.id+1}</h2>
        <div>
            <p className='text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus veniam est porro similique optio.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-bold px-8 py-2 rounded-full '>{Props.tag}</button>
                <button className='bg-blue-600 text-white font-bold px-3 py-2 rounded-full '><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default Right_Card_Content
