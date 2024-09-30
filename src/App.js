//src//App.js
// Hastings Gold
// 301363327
// 28-09-2024

import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Skills from "./components/Skills"
//import Testimonial from "./components/Testimonial"

function App() {
  return (
    <>
     <Navbar/>
     <Header/>
     <About/>
     <Services/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
