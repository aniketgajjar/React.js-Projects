import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'
const Left_Content = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
      <HeroText />
      <Arrow />
    </div>
  )
}

export default Left_Content
