import React from 'react'
import RightCard from './RightCard'

const Right_Content = (Props) => {
  return (
    <div id='Right' className='h-full rounded-4xl flex flex-nowrap overflow-x-auto gap-10 p-6 w-3/4'>
        {Props.users.map(function(elem, idx) {

            return <RightCard key = {idx} id = {idx} img = {elem.img} tag = {elem.tag}/>
        })}
    </div>
  )
}

export default Right_Content
