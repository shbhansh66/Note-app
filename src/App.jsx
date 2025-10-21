import React, { useState } from 'react'


const App = () => {

  const [title, settitle] = useState('');
  const [details, setdetails] = useState('');
  const [task, settask] = useState([]);

  function formHandling(e){
    e.preventDefault();
    const copytask=[...task];

    copytask.push({title,details});
    settask(copytask);
   
    
    settitle('')
    setdetails('')
    
  }

  return (

    <div className=' bg-black  h-screen w-full flex flex-col lg:flex-row  text-white overflow-hidden'>
      <img className='absolute w-full h-screen z-0 opacity-45' src="https://img.freepik.com/premium-photo/book-note-black-board-paper-note-add-text_43429-379.jpg" alt="" />
      <form onSubmit={(e)=>{
        formHandling(e);
      }} className='lg:w-1/2 flex flex-col w-full  gap-4 p-10 z-10 ' action="">
        <h1 className='text-3xl font-extrabold'>Add Notes</h1>

        {/* input title */}
        <input className='px-5 py-4 border-2 rounded font-medium ' type="text" value={title}  onChange={(e)=>{
          settitle(e.target.value)
        }} placeholder='Write Note Heading'/>

        {/* details */}
        <textarea className='px-5 py-4 border-2 h-48 rounded font-medium'  placeholder='Write Details'  value={details} onChange={(e)=>{
          setdetails(e.target.value)
        }} name=""/>
        <button  className='active:scale-95 px-5 py-4 border-2 rounded font-medium bg-white text-black' >Add Notes</button>
      </form>

      <div className=' lg:w-1/2 w-full lg:p-10 flex flex-col gap-4 items-center h-full  lg:border-l-2 z-10'>
      <h1 className='text-3xl font-bold border-2 bg-yellow-500 rounded-2xl p-2 shadow-2xl shadow-amber-500'>Recent Notes</h1>
       <div className='relative scroll  flex gap-4 md:flex-row flex-wrap md:gap-4 h-full overflow-auto '>

       {task.map(function(elem,idx){
        return <div key={idx} className="h-52 p-10 text-black w-40 rounded-2xl overflow-hidden bg-white relative  bg-cover bg-[url('https://i.pinimg.com/474x/8e/79/25/8e7925764426f3dc2247162261238fd3.jpg')]">
        <div>
          <h1>{elem.title}</h1>
        <p>{elem.details}</p>
        </div>
        <button className='bg-red-500 text-white active:scale-90 px-8 absolute bottom-4 right-7 rounded '>Delete</button>
         </div>
       })}
      
         
   
       
               
          
       </div>
      </div>
    </div>
  )
}

export default App
