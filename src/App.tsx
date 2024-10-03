import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import FlipbookPage from './pages/Flipbooks'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/magazine/:id' element={<FlipbookPage />} />
    </Routes>
  )
}

export default App
