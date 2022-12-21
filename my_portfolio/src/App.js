import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
