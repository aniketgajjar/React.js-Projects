import React, { useContext, useState } from 'react'
import {AuthContext} from '../../Context/AuthProvider'
const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

     const [taskTitle, setTaskTitle] = useState('')
    const [date, setDate] = useState('')
    const [assing, setAssing] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault()
        
        setNewTask({taskTitle, description, date, category, active: false, newTask:true, completed: false, failed: false})

        const data = userData

        data.forEach(function(elem) {
            if(assing == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1; 
            }
        })

        setUserData(data)

        setTaskTitle('')
        setCategory('')
        setAssing('')
        setDate('')
        setDescription('')
    }
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded items-start justify-between">
        <form onSubmit={(e)=> {
            submitHandler(e);
        }} className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div className="">
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e) => {
                    setTaskTitle(e.target.value);
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design...' />
            </div>
            
            <div className="">
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" name="" id="" />
            </div>
            <div className="">
                <h3 className='text-sm text-gray-300 mb-0.5'>Asing To</h3>
                <input 
                value={assing}
                onChange={(e) => {
                    setAssing(e.target.value);
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name...'/>
            </div>
            <div className="">
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value);
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design, Dev, etc...'/>
            </div>
        </div>
              <div className='w-1/2'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols= "30" rows= "10"></textarea>
            </div>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </form>
      </div>
  )
}

export default CreateTask
