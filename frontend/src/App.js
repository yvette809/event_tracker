// import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import EventDetails from './pages/EventDetails'
import Navigation from './components/Navigation'
import Registration from './components/Registration'
import Login from './components/Login'



function App() {
  <BrowserRouter>
    <Navigation />
    <div className="container">
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/events/:id' element={<EventDetails />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  </BrowserRouter>

}

export default App;
