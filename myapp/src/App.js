import './App.css';
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import About from "./components/About" 

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Skills />
      <Banner />
      <Contact />
    </div>
  );
}

export default App;
