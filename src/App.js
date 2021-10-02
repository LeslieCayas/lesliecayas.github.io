import './App.css';
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
