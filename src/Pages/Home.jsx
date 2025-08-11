import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Qualification from '../Components/Qualification';
import Projects from '../Components/Projects';

import Header from '../Components/Header';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;