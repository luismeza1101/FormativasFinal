import { Route, Routes } from 'react-router-dom'
import './App.css'
import Capacitaciones from './pages/Capacitaciones'
import InfoCapacitacion from './pages/InfoCapacitacion'
import Inicio from './pages/Inicio'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/capacitaciones' element={<Capacitaciones/>}/>
        <Route path="/capacitaciones/:id" element={<InfoCapacitacion />} />
      </Routes>
    </>
  )
}

export default App
