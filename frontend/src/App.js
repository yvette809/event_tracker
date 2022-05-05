
import { Routes, Route, BrowserRouter  } from 'react-router-dom'
import Home from './pages/Home'
import EventDetails  from './pages/EventDetails'
import Navigation from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <Routes >
        <Route path='/' element={ <Home /> } />
        <Route path='/events/:id' element={ <EventDetails /> } />
        </Routes>
      </div>
    </BrowserRouter> 

  );
}

export default App;
