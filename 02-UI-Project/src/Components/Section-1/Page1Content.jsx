import React from 'react'
import Left_Content from './Left_Content'
import Right_Content from './Right_Content'

const Page1Content = (Props) => {
  return (
    <div className='py-10 flex items-center justify-between gap-10 h-[85vh] px-18'>
      <Left_Content />
      <Right_Content users = {Props.users}/>
    </div>
  )
}

export default Page1Content
