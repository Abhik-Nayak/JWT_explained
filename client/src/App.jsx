import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { logo } from './assets';
import Home from './pages/Home';
const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={logo} alt="logo" className='w-28 object-contain' />
        </Link>
        <Link to="/create-post" className='font-inter font-medium '>
          <h4 className='font-entrabold text-[#222328] text-[32px]'>
            Random Box & Color Genrator
          </h4>
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
          <Home/>
      </main>
    </BrowserRouter>
  )
}

export default App