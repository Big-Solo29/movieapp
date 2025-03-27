import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useMovieContext } from '../context/MovieContext'

function MovieCard ({movie}) {
  const {isFavourite, addToFavourites, removeFromFavourites} = useMovieContext()
  const favourite = isFavourite (movie.id)


    function onFavouriteClick(e){
        e.preventDefault ()
        if(favourite) removeFromFavourites(movie.id)
          else addToFavourites(movie)

    }
 
  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900 transition-transform duration-200 h-full flex flex-col">
      
  <div className='movie-card bg-gray-900 rounded overflow-hidden'>
    <div className='movie-poster relative'>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
        className="w-full h-48 object-cover"
      />
      <div className='movie-overlay absolute top-2 right-2'>
        <button 
          className={`favourite-btn ${favourite ? "text-red-500" : "text-white"}`} onClick={onFavouriteClick}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
    <div className='movie-info p-3'>
      <h3 className="text-white font-medium">{movie.title}</h3>
      <p className="text-gray-400 text-sm">{movie.release_date?.split("-")[0]}</p>
    </div>
  </div>
</div>
  )
}

export default MovieCard