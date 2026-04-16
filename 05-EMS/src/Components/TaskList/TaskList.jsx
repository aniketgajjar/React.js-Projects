import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompliteTask from './CompliteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10'>
      {data.tasks.map((elem, idx) => {
        if(elem.active) {
          return <AcceptTask key={idx} data = {elem}/>
        }
        if(elem.newTask) {
          return <NewTask key={idx} data = {elem}/>
        }
        if(elem.completed) {
          return <CompliteTask key={idx} data = {elem}/>
        }
        if(elem.failed) {
          return <FailedTask key={idx} data = {elem}/>
        }
      })}
    </div>
  )
}

export default TaskList
