import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
