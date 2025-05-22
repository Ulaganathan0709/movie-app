import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Navbar } from './pages/Navbar'
import { Home } from './pages/Home'
import { Watchlist } from './pages/Watchlist'

function App() {

  const movies = {
    poster : "https://image.tmdb.org/t/p/w500/f6BhexotEqO3GejXa3FopBNGL6M.jpg",
    title: "Theri",
    releaseDate: "2016-04-14"
}


  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/watchlist' element={<Watchlist />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
