// NoteList.js

import React from 'react';
import { Plus } from 'lucide-react';
import NoteCard from './NoteCard'; // 👈 Import NoteCard

const NoteList = ({ task, deleteNote, setIsFormOpen }) => {
    return (
        <div className='lg:w-1/2 w-full lg:p-10 p-5 flex flex-col gap-6 items-center h-full lg:border-l-2 border-gray-700 z-10 overflow-hidden relative'>
            
            {/* Mobile Open Form Button */}
            <button
                onClick={() => setIsFormOpen(true)}
                className='md:hidden absolute bottom-10 right-4 z-30 bg-yellow-500 text-gray-900 rounded-full w-14 h-14 flex justify-center items-center shadow-xl border-4 border-green-500 active:scale-90 transition'
                aria-label="Add Note"
            >
                <Plus size={30} />
            </button>

            <h1 className='text-3xl font-bold border-2 border-yellow-500 bg-yellow-500 rounded-2xl p-2 shadow-2xl shadow-yellow-800 text-gray-900 whitespace-nowrap'>
                {task.length > 0 ? `Recent Notes (${task.length})` : 'Recent Notes'}
            </h1>
            
            <div className='scroll relative flex gap-4 flex-wrap justify-center w-full h-full overflow-y-auto overflow-x-hidden p-2'>
                
                {task.length === 0 ? (
                    <p className="text-gray-400 mt-20 text-xl font-light">Start adding your notes above!</p>
                ) : (
                    task.map((elem, idx) => (
                        <NoteCard 
                            key={idx} 
                            note={elem} 
                            idx={idx} 
                            deleteNote={deleteNote} 
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default NoteList;