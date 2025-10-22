import React, { useState ,useEffect } from 'react'
import { X } from 'lucide-react';


const App = () => {

  const [title, settitle] = useState('');
  const [details, setdetails] = useState('');
  const [task, settask] = useState(() => {
        const savedNotes = localStorage.getItem('react-notes-app');
        return savedNotes ? JSON.parse(savedNotes) : [];
    });


    useEffect(() => {
        localStorage.setItem('react-notes-app', JSON.stringify(task));
    }, [task]);

  function formHandling(e){
    e.preventDefault();
    if (!title.trim() || !details.trim()) {
            alert("Please enter both a title and details.");
            return;
        }
    const copytask=[...task];

    copytask.push({title,details});
    settask(copytask);
   
    
    settitle('')
    setdetails('')
    
  }

  function deleteNote(idx){
    const copytask=[...task];
    copytask.splice(idx,1)
    settask(copytask)
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
        }} placeholder='Write Note Heading'  />

        {/* details */}
        <textarea className='px-5 py-4 border-2 h-48 rounded font-medium required'  placeholder='Write Details'  value={details} onChange={(e)=>{
          setdetails(e.target.value)
        }} name="" />
        <button  className='active:scale-95 px-5 py-4 border-2 rounded font-medium bg-white text-black' >Add Notes</button>
      </form>

      <div className=' lg:w-1/2 w-full lg:p-10 flex flex-col gap-4 items-center h-full  lg:border-l-2 z-10'>
      <h1 className='text-3xl font-bold border-2 bg-yellow-500 rounded-2xl p-2 shadow-2xl shadow-amber-500'>Recent Notes</h1>
       <div className='relative scroll  flex gap-4  flex-wrap  h-full overflow-auto '>

       {task.map(function(elem,idx){
        return <div key={idx} className=" h-52 lg:h-64 lg:w-52 py-2 px-2 pr-2 text-black w-40  rounded-2xl overflow-hidden relative  bg-cover bg-[url('https://i.pinimg.com/474x/8e/79/25/8e7925764426f3dc2247162261238fd3.jpg')]">
        <div className='absolute scroll  px-2 py-4 w-full h-[11rem] lg:h-[14rem] overflow-y-auto overflow-x-hidden'>
          <h2 onClick={() => deleteNote(idx)} className= 'absolute top-2 right-4 bg-red-500 rounded-full  w-6 h-6 flex justify-center items-center'><X size={16} color="#f0ebeb" strokeWidth={1.75} /></h2>
          <h1 className='text-lg p-2 leading-tight  font-bold break-words' >{elem.title}</h1>
        <p className='text-gray-500 mt-1 p-1 text-sm leading-tight  font-medium  break-words'>{elem.details}</p>
        </div>
       
         </div>
       })}
      
         
   
       
               
          
       </div>
      </div>
    </div>
  )
}

export default App
