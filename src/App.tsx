import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RootLayout } from './layouts/root-layout/RootLayout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<RootLayout />} >
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
