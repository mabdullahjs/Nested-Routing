import React from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import About from './screens/About';
import Contact from './screens/Contact';
import Dashboard from './screens/dashboard';
import Navbar from './screens/Navbar';

function Home() {
  // const params = useParams();
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default Home