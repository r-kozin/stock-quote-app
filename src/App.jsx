import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Search from './features/search/Search'
import { ListQuote } from './features/quote/ListQuote'
import { Navbar } from './app/Navbar'
import { Favorites } from './features/favorites/Favorites'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './app/Footer'
import { useSelector } from 'react-redux'


function App() {
  const theme = useSelector((state) => state.quote.darkMode);
  return (
    <Router>
    <Navbar />
    <div className={`App ${theme}`}>
    <Routes>
      <Route exact path='/' element={<Search />} />
      <Route exact path='/favorites/' element={<Favorites />} />
      <Route exact path="/quote/:quoteSymbol" element={<ListQuote />} />
      <Route path='/' element={<Navigate to="/" />} />
    </Routes>
    </div>
    <Footer />
    </Router>
  )
}

export default App
