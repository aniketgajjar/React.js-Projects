import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title, details}); 

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


    const deleteNotes = (idx) => {
        const copyTask = [...task]

        // --- splice() basicaly idex ki detail ko remove karta hai!
        copyTask.splice(idx,1)
        setTask(copyTask)
    }
  return (
    <div className='h-screen lg:flex bg-blue-950 text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>
            <input type="text" 
            placeholder='Enter Notes Heading'
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            />
            <textarea type="text" 
            placeholder='Write Details...'
            className='px-5 w-full h-40 py-2 font-medium flex items-start flex-row border-2 outline-none rounded'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value)
            }}
            />
            <button className='bg-gray-50 active:scale-95 w-full font-medium outline-none text-black px-5 py-2 rounded'>Add Notes</button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
            {task.map(function(elem, idx) {

              return <div key={idx} className="flex justify-between flex-col relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qMZEJSG6vy2aOHZ7uuSF75vX7cOAgTl3sQ&s')]">
                <div className="">
                  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                  <p className='mt-4 leading-tight text-xs font-medium text-gray-500'>{elem.details}</p>
                </div>
                <button onClick={() => {
                    deleteNotes(idx)
                }} className='w-full cursor-pointer active:scale-95 bg-red-400 p-1 text-xs font-bold rounded  text-white '>Delete Note</button>
              </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default App
