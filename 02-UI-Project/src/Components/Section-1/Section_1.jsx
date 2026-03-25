import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section_1 = (Props) => {
  return (
    <div className='h-screen w-full'>
        <Navbar />
        <Page1Content users = {Props.users} />
    </div>
  )
}

export default Section_1
