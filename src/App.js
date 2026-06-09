import './App.css';
import AboutMe from './Components/AboutMe'
import Education from './Components/Education';
import Experiences from './Components/Experiences';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects'
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Experiences />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
