import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WatchlistContext } from '../context/WatchListContext'

export const Navbar = () => {
  const {watchlist} = useContext(WatchlistContext);
  return (
    <nav className='bg-gray-900 p-4 text-white flex justify-between fixed w-full top-0 z-10'>
        <Link className='text-xl font-bold' to="/">
        Movie App
        </Link>
        <Link to="/watchlist" className='text-xl'>
        watchlist({watchlist.length})
        </Link>
    </nav>
  )
}
