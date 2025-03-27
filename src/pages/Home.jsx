import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';
import "../css/Home.css"

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Add this useEffect to handle auto-dismissal of errors
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 3000); // 10 seconds
            
            return () => clearTimeout(timer); // Cleanup on unmount or error change
        }
    }, [error]);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery?.trim()) {
            setError("Please enter a search term");
            return;
        }
        if(loading) return;

        setLoading(true);
        setError(null);
        try {
            const searchResults = await searchMovies(searchQuery.trim());
            setMovies(searchResults);
            
            if (!searchResults?.length) {
                setError("No movies found. Try a different search.");
            }
        } catch (err) {
            console.log(err);
            setError("Failed to search movies. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form m-7'>
                <input 
                    type="text" 
                    placeholder='search for movies...' 
                    className='search-input bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                    type='submit' 
                    className='search-button bg-gray-800 hover:bg-gray-900 text-white font-bold ml-5 py-2 px-4 rounded transition delay-150 duration-300 ease-in-out'
                    disabled={loading}
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {/* Error message with fade-out animation */}
            {error && (
                <div className="error-message bg-gradient-to-r from-red-600 via-red-700 to-red-950  text-white font-mono px-4 py-2 mb-4 transition-opacity duration-100">
                    {error}
                </div>
            )}
 
            {loading ? (
                <div className='loading'>Loading...</div>
            ) : (
                <div className="movies-container flex flex-wrap justify-center gap-2 p-3">
                    {movies.map((movie, index) => (
                        <div key={movie.id || index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home