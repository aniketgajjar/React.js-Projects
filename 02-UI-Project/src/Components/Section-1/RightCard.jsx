import React from 'react'
import Right_Card_Content from './Right_Card_Content'
const RightCard = (Props) => {
  return (
    <div className=' h-full shrink-0 w-75 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={Props.img} alt="" />
      
      <Right_Card_Content id = {Props.id} tag = {Props.tag}/>
    </div>
  )
}

export default RightCard
