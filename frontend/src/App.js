import {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Events from './pages/Events'

function App() {
  const[events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const url = "http://localhost:4010/events?sort=time"

  const getEvents = async()=>{
    setLoading(true)
    const res = await axios.get(url)
    setEvents(res.data)
    
  }

  useEffect(()=>{
     getEvents()
  },[])

  return (
    <div className="App">
   <Events events={events} loading={loading}/>
    </div>
  );
}

export default App;
