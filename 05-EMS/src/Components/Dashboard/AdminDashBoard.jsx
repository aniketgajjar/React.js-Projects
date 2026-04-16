import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashBoard = (Props) => {
  return (
    <div className='h-screen w-full p-7'>
      <Header changeUser = {Props.changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashBoard
