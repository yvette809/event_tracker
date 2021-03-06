import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Events from './components/Events'
import './index.css'
import EventDetails from './pages/EventDetails'
import Navigation from './components/Navigation'
import Registration from './components/Registration'
import Login from './components/Login'
import AddEvent from './components/AddEvent'
import PassEvents from './pages/PassEvents'
import { checkUser } from './actions/userActions';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])

  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <Navigation setShowModal={setShowModal} />
      <div className="container">

        <Routes >
          <Route path='/' element={<Events setShowModal={setShowModal} />} />
          <Route path='/events/:id' element={<EventDetails />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pass-events' element={<PassEvents />} />
          {/* <Route path='/add-event' element={<AddEvent />} /> */}
        </Routes>
      </div>
      {showModal && <AddEvent setShowModal={setShowModal} />}
    </div>

  )

}

export default App;
