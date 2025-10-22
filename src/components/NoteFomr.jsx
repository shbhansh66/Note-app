// NoteForm.js

import React from 'react';
import { X } from 'lucide-react';

const NoteForm = ({ title, settitle, details, setdetails, formHandling, setIsFormOpen }) => {
    
    // Validation logic moved here for cleaner form submission
    function formHandling(e) {
        e.preventDefault();
        
        // if (!title.trim() || !details.trim()) {
        //     alert("Please enter both a title and details.");
        //     return;
        // }
        
        // Call the main handler
        formHandling(e);
        
        // Close form after successful submission on mobile
        if (window.innerWidth < 1024) {
            setIsFormOpen(false);
        }
    }

    return (
        <form 
          onSubmit={formHandling} 
          className={`
              'fixed inset-0 z-40 bg-gray-900 flex'
              ${isFormOpen ? 'fixed inset-0 z-40 bg-gray-900 flex' : 'hidden'} 
              lg:w-1/2 flex-col w-full gap-6 p-10 z-10 bg-opacity-90 backdrop-blur-lg shadow-lg md:flex
          `} 
          action=""
      >
        <button  onClick={() => setIsFormOpen(false)} className='w-6 h-6 bg-red-500 rounded-full flex items-center justify-center absolute right-5'>
              <X size={16} color="#f0ebeb" strokeWidth={1.75} />
          </button>
         
                      <h1 className='text-4xl font-extrabold text-yellow-400 mb-4'>Add Notes</h1> {/* Enhanced heading */}
      
                      {/* Input Title - Improved styling */}
                      <input 
                          className='px-5 py-4 border-2 border-gray-600 rounded-lg font-medium text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200' 
                          type="text" 
                          value={title} 
                          onChange={(e)=>{ settitle(e.target.value) }} 
                          placeholder='Write Note Heading' 
                      required/>
      
                      {/* Details Textarea - Improved styling */}
                      <textarea 
                          className='px-5 py-4 border-2 border-gray-600 h-48 rounded-lg font-medium required text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none transition duration-200' 
                          placeholder='Write Details' 
                          value={details} 
                          onChange={(e)=>{ setdetails(e.target.value) }} 
                          name="" 
                      />
                      
                      {/* Submit Button - Improved styling */}
                      <button  onClick={() =>{ 
                           if (!title.trim() || !details.trim()) {
                  alert("Please enter both a title and details.");
                  return;
              }
                          setIsFormOpen(false)}}
                          type="submit" // Explicitly set type to submit
                          className='active:scale-95 px-5 py-4 border-2 border-yellow-500 rounded-lg font-bold bg-yellow-500 text-gray-900 shadow-md hover:bg-yellow-400 transition duration-200' 
                      >
                          Add Note
                      </button>
                  </form>
    );
};

export default NoteForm;