import React from 'react';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import Favourites from './pages/Favourites';
import { MovieProvider } from './context/MovieContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <MovieProvider>
    <div className='bg-gradient-to-r  from-red-950  via-red-700 to-red-600'>
      <Navbar />
 <main className='main-content'>
<Routes>
  <Route path="/" element ={<Home />} />
  <Route path="/favourites" element ={< Favourites className='bg-slate-900'/>} />

</Routes>
 </main>
 </div>
 </MovieProvider>
 <Footer />

    </>
  )
}

export default App
