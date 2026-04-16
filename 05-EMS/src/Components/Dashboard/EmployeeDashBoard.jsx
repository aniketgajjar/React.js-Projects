import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashBoard = (Props) => {
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header changeUser = {Props.changeUser} data = {Props.data} />
        <TaskListNumber data = {Props.data}/>
        <TaskList data = {Props.data}/>
    </div>
  )
}

export default EmployeeDashBoard