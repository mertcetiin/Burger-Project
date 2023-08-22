import './App.css'
import Navbar from '../src/components/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import Communication from './components/Communication';

function App() {


  return (
    <div className='headerLink'>
      <Navbar />
      <Routes>
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/communication' element={<Communication />} />
      </Routes>
    </div>
  )
}

export default App;