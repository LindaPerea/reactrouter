import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import ProjectDetail from './components/ProjectDetail'
import Projects from './components/Projects'
import Team from './components/Team'
import TeamDetail from './components/TeamDetail'
import Technologies from './components/Technologies'


function App() {

  return (
    <HashRouter >
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">ir a About </Link>
            </li>
            <li>
              <Link to="/team">ir a Team</Link>
            </li>

            <li>
              <Link to="/projects">ir a Projects </Link>
            </li>
            <li>
              <Link to="/technologies"> ir a Technologies </Link>
            </li>
            <li>
              <Link to="/"> Home </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/" element={<Home />} />
          <Route path="/team/:name" element={<TeamDetail />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>

        <footer>
          este es el footer
        </footer>
      </div>
    </HashRouter >


        );
};

export default App
