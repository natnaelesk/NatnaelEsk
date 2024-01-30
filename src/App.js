// import Home from "./Pages/Home"; 

import About from "./About";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
     <NavBar />
     <Hero />
     <About />
     <Projects />
     <Contacts />
     <Footer />
    </div>
  );
}

export default App;
