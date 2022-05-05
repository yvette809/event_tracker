import {useState,useEffect}from 'react'
import axios from 'axios'
import Events from '../components/Events'


const Home = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(false)
    const url = "http://localhost:4010/events?sort=time"
    //const url = "http://localhost:4010/events"
  
    const getEvents = async () => {
      setLoading(true)
      const res = await axios.get(url)
      setEvents(res.data.data)
      setLoading(false)
    }
  
    useEffect(() => {
      getEvents()
    }, [])
  return(
      <Events events = {events} loading={loading}/>
  )
}

export default Home