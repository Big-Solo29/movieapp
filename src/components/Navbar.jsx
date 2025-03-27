import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import "../css/Navbar.css"
import movie from "../assets/img/movie-logo.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-bar bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-white font-bold text-xl hover:text-gray-300 hover:no-underline transition-colors duration-200"
            >
              <img src={movie} alt="" className='img'/>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className=" items-center space-x-6">
            <Link
              to="/"
              className="small text-white hover:bg-red-700 hover:no-underline hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/favourites"
              className="small text-white hover:bg-red-700 hover:no-underline hover:text-white  px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
            >
              Favorites
            </Link>
          </div>

          {/* Mobile menu button - Hidden on desktop */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1 sm:px-3 block px-3 py-2 rounded-md text-base font-medium
                      text-white hover:bg-gray-700 hover:no-underline
                      transition-all duration-300 ease-in-out
                      transform hover:scale-105">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-gray-700 hover:no-underline block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-gray-700 hover:no-underline block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;