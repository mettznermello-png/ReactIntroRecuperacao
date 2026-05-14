import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Lugares from './pages/LugaresDoMundo'
import Operaçoes from './pages/4'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Operaçoes' element={<Operaçoes />} />
        <Route path='/LugaresDoMundo' element={<Lugares />} />
      </Routes>
      <Footer />
    </>
  )

}

export default App