import './App.css';
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import About from "./components/About" 
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer" 

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
