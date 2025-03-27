  import React from 'react'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

function Favourites () {
  const {favourites } = useMovieContext();

  if (favourites){
    return (
      <div className='favourites'>
      <h2 className='my-10 text-center text-white font-sans font-bold'>Your Favourites</h2>
      <div className='flex flex-wrap justify-center gap-4'>
        {favourites.map((movie) => (
          <div key={movie.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}


  

    return (
      <div className="flex justify-center items-center min-h-[200px]">
  <div className="bg-gray-900 rounded-lg shadow-md p-6 w-90 text-center border border-gray-700">
    <h1 className="text-red-500 text-xl font-semibold mb-3">No Favourite Movies Yet</h1>
    <p className="text-gray-300">Start adding movies to your favourites and they will appear here</p>
  </div>
</div>
    )
}
  export default Favourites