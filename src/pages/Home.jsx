import React, { useEffect, useState } from 'react'
import { MovieCards } from '../components/MovieCard'

const movies = [ {
    poster : "https://image.tmdb.org/t/p/w500/f6BhexotEqO3GejXa3FopBNGL6M.jpg",
    title: "Theri",
    releaseDate: "2016-04-14"
},
{
    poster : "https://image.tmdb.org/t/p/w500/f6BhexotEqO3GejXa3FopBNGL6M.jpg",
    title: "Theri",
    releaseDate: "2016-04-14"
},
{
    poster : "https://image.tmdb.org/t/p/w500/f6BhexotEqO3GejXa3FopBNGL6M.jpg",
    title: "Theri",
    releaseDate: "2016-04-14"
},
{
    poster : "https://image.tmdb.org/t/p/w500/f6BhexotEqO3GejXa3FopBNGL6M.jpg",
    title: "Theri",
    releaseDate: "2016-04-14"
},
{
    poster : "https://image.tmdb.org/t/p/w500/f6BhexotEqO3GejXa3FopBNGL6M.jpg",
    title: "Theri",
    releaseDate: "2016-04-14"
},
{
    poster : "https://image.tmdb.org/t/p/w500/f6BhexotEqO3GejXa3FopBNGL6M.jpg",
    title: "Theri",
    releaseDate: "2016-04-14"
},
{
    poster : "https://image.tmdb.org/t/p/w500/f6BhexotEqO3GejXa3FopBNGL6M.jpg",
    title: "Theri",
    releaseDate: "2016-04-14"
},
{
    poster : "https://image.tmdb.org/t/p/w500/f6BhexotEqO3GejXa3FopBNGL6M.jpg",
    title: "Theri",
    releaseDate: "2016-04-14"
}
]



useEffect (() => {
  fetch("const ('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1")
  .then((response) => response.json())
  .then((data) => setMovies())
})
export const Home = () => {
  return (
    <div className='p-4 pt-16'>
      <input
        type='text'
        placeholder='Search Movies...'
        className='p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 opacity-60 backdrop-blur-md text-white fixed top-16 left-1/2 -translate-x-1/2 z-10'
      />
      <div className='movies-container grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 mt-16 gap-4'>
        {movies.map(movie => {
          return (
            <MovieCards key={movie.id} movie = {movie} />
          );
        })}        
      </div>
      <div className='pagination-container flex justify-between mt-5 '>
        <button className='p-2 bg-gray-700 text-white'>
          PREV
        </button>
        <button className='p-2 bg-gray-700 text-white'>NEXT</button>
      </div>
    </div>
  )
}
