import React from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const MovieCards = ({movie}) => {
  return (
    <div className='bg-gray-800 p-4 rounded-lg shadow-md *:first-letter
    text-white relative'>
        <img src={movie.poster} alt={movie.title}
        className='w-full h-80 object-contain rounder-sm ' />
        <h3 className='text-lg font-bold mt-4'>{movie.title}</h3>
        <p className='text-sm text-gray-400'>{movie.releaseDate}</p>
        <button className='absolute top-2 right-2 text-red-500 text-xl'>
          {1 !== 1 ? <FaHeart/> : <FaRegHeart/>} 
        </button>
    </div>
  )
}
