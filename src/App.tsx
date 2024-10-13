import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RootLayout } from './layouts/root-layout/RootLayout'
import { SimulationLayout } from './layouts/simulation-layout/SimulationLayout'
import { Mps7SimPage } from './pages/simulation/Mps7SimPage'
import { Acs12CorrosionSimPage } from './pages/simulation/Acs12CorrosionSimPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<RootLayout />} >
        <Route index element={<HomePage />} />

        <Route path='simulation' element={<SimulationLayout />}>

          <Route path='about' element={<AboutPage />} />

          <Route path='mps7' element={<Mps7SimPage />} />
          <Route path='asc12corrosion' element={<Acs12CorrosionSimPage />} />


        </Route>


        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
