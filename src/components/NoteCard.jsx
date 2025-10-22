// NoteCard.js

import React from 'react';
import { X } from 'lucide-react';

const NoteCard = ({ note, idx, deleteNote }) => {
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
};

export default NoteCard;