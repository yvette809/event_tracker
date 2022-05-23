import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Events from './components/Events'
import './index.css'
import EventDetails from './pages/EventDetails'
import Navigation from './components/Navigation'
import Registration from './components/Registration'
import Login from './components/Login'
import AddEvent from './components/AddEvent'


function App() {
  const[showModal, setShowModal] = useState(false)
  return (
    <div>
      {showModal && <AddEvent setShowModal={setShowModal}/> }
      <Navigation setShowModal={setShowModal}/>
      <div className="container">

        <Routes >
          <Route path='/' element={<Events />} />
          <Route path='/events/:id' element={<EventDetails />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/add-event' element={<AddEvent />} /> */}
        </Routes>

      </div>
    </div>

  )

}

export default App;
