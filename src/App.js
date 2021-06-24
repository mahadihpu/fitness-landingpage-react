import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Feature from './Components/Feature/Feature';
import Offer from './Components/Offer/Offer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Copyright from './Components/Copyright/Copyright';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
      <Copyright />
    </>
  );
}

export default App;
