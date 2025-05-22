import React, { useContext, useState } from 'react';
import { GenreFilter } from '../components/GenreFilter';
import { MovieCards } from '../components/MovieCard';
import { WatchlistContext } from '../context/WatchListContext';

export const Watchlist = () => {
  const { watchlist } = useContext(WatchlistContext);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredMovies = watchlist
    .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
    .filter((movie) =>
      selectedGenre === "" || movie.genre_ids.includes(parseInt(selectedGenre))
    );

  return (
    <div className='p-4 pt-16'>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search Movies...'
        className='p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 opacity-60 backdrop-blur-md text-white fixed top-16 left-1/2 -translate-x-1/2 z-10'
      />

      {/* Genre filter centered below search */}
      <div className='mt-28 flex justify-center'>
        <GenreFilter selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
      </div>

      {/* Movie grid */}
      <div className='movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4'>
        {filteredMovies.map((movie) => (
          <MovieCards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
