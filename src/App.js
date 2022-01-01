import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import Header from "./Header";
import Offerings from "./Offerings";
import Footer from "./footer";
import We from "./we";
import Contact from "./contact";
import About from "./about";
/* import Innovativepss from "./innovativepss" */
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Header></Header>
      <Hero></Hero>
      <Submenu></Submenu>
      <Offerings></Offerings> 
      <About></About>
      {/* <Innovativepss></Innovativepss> */}
      <We></We>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App
