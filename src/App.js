import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Activities />
      <Certificates />
      <Achievements />
      <Footer />
    </div>
  );
};

export default App;
