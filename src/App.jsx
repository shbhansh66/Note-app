import React, { useState, useEffect } from 'react';
import { X,Plus,Cross } from 'lucide-react';


const App = () => {

    const [title, settitle] = useState('');
    const [details, setdetails] = useState('');

    const [task, settask] = useState(() => {
        const saveNotes = localStorage.getItem('react-notes-app');
        return saveNotes ? JSON.parse(saveNotes) : [];
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
        //  Functional update form for safety
        settask(prevTasks => [...prevTasks, { title, details }]);
        
        settitle('');
        setdetails('');
    }

    function deleteNote(idx){
        //  Functional update form using filter (safer and cleaner)
        settask(prevTasks => prevTasks.filter((_, index) => index !== idx));
    }

    return (
        <div className='bg-gray-600 h-screen w-full flex flex-col lg:flex-row text-white overflow-hidden'>
            {/* Background Image - Adjusted opacity and object-cover */}
            <img 
                className='absolute w-full h-screen z-0 opacity-20 object-cover' 
                src="https://img.freepik.com/premium-photo/book-note-black-board-paper-note-add-text_43429-379.jpg" 
                alt="Blackboard background" 
            />

        
           <button 
                                        onClick={() => deleteNote(idx)} 
                                        className='absolute bottom-10  right-2 bg-red-600 text-white rounded-full w-13 h-13 active:scale-90 transition duration-150 z-20  border-3 shadow-lg border-green-500'
                                        aria-label="Delete Note">
                                  <Plus size={40} color="#e7dede" strokeWidth={5} className='relative left-1' />
                                    </button>
            {/* Form Section */}
            <form 
                onSubmit={formHandling} 
                className='lg:w-1/2 flex flex-col w-full gap-6 p-10 z-10  bg-opacity-90 backdrop-blur-lg shadow-lg hidden sm:flex' // Added more styling
                action=""
            >
                <h1 className='text-4xl font-extrabold text-yellow-400 mb-4'>Add Notes</h1> {/* Enhanced heading */}

                {/* Input Title - Improved styling */}
                <input 
                    className='px-5 py-4 border-2 border-gray-600 rounded-lg font-medium text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200' 
                    type="text" 
                    value={title} 
                    onChange={(e)=>{ settitle(e.target.value) }} 
                    placeholder='Write Note Heading' 
                />

                {/* Details Textarea - Improved styling */}
                <textarea 
                    className='px-5 py-4 border-2 border-gray-600 h-48 rounded-lg font-medium required text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none transition duration-200' 
                    placeholder='Write Details' 
                    value={details} 
                    onChange={(e)=>{ setdetails(e.target.value) }} 
                    name="" 
                />
                
                {/* Submit Button - Improved styling */}
                <button 
                    type="submit" // Explicitly set type to submit
                    className='active:scale-95 px-5 py-4 border-2 border-yellow-500 rounded-lg font-bold bg-yellow-500 text-gray-900 shadow-md hover:bg-yellow-400 transition duration-200' 
                >
                    Add Note
                </button>
            </form>

            {/* Notes Display Section */}
            <div className='lg:w-1/2 w-full lg:p-10 p-5 flex flex-col gap-6 items-center h-full lg:border-l-2 border-gray-700 z-10 overflow-hidden '>
                <h1 className='text-3xl font-bold border-2 border-yellow-500 bg-yellow-500 rounded-2xl p-2 shadow-2xl shadow-yellow-800 text-gray-900 whitespace-nowrap'> {/* Enhanced heading */}
                    {task.length > 0 ? `Recent Notes (${task.length})` : 'Recent Notes'}
                </h1>
                
                {/* Notes Container - Adjusted layout for better wrapping */}
                <div className='scroll relative flex gap-4 flex-wrap justify-center w-full h-full overflow-y-auto overflow-x-hidden p-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 '> {/* Added custom scrollbar */}
                    
                    {/* Conditional message when no notes */}
                    {task.length === 0 ? (
                        <p className="text-gray-400 mt-20 text-xl font-light">Start adding your notes above!</p>
                    ) : (
                        task.map(function(elem,idx){
                            return (
                                <div key={idx} className="
                                    h-74 lg:h-76 lg:w-64 w-64  sm:w-52 p-2 
                                    text-gray-900 bg-white rounded-2xl shadow-xl shadow-yellow-900 
                                    overflow-hidden relative 
                                    bg-cover bg-center 
                                    bg-[url('https://i.pinimg.com/474x/8e/79/25/8e7925764426f3dc2247162261238fd3.jpg')] 
                                    flex flex-col
                                ">
                                    {/* Delete Button - changed to <button> for semantics */}
                                    <button 
                                        onClick={() => deleteNote(idx)} 
                                        className='absolute top-2 right-2 bg-red-600 text-white rounded-full w-7 h-7 flex justify-center items-center active:scale-90 transition duration-150 z-20'
                                        aria-label="Delete Note">
                                        <X size={16} color="#f0ebeb" strokeWidth={1.75} />
                                    </button>
                                    
                                    {/* Content Container - Adjusted padding to make space for delete button */}
                                     <div className='absolute   px-2 py-4 w-full h-[11rem] lg:h-[14rem] overflow-y-auto overflow-x-hidden'>
          <h2 onClick={() => deleteNote(idx)} className= 'absolute top-2 right-4 bg-red-500 rounded-full  w-6 h-6 flex justify-center items-center'><X size={16} color="#f0ebeb" strokeWidth={1.75} /></h2>
          <h1 className='relative left-12 text-lg p-2 leading-tight  font-bold break-words' >{elem.title}</h1>
        <p className='text-gray-500 mt-1 p-1 text-sm leading-tight  font-medium  break-words'>{elem.details}</p>
        </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default App;