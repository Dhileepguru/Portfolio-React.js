
import { Component } from 'react';
import './App.css';
import  Header from './assets/components/Header';
import Content from './assets/components/Content';
import About from './assets/components/About';
import Projects from './assets/components/Projects';
import Blogs from './assets/components/Blogs';
function App() {
  return (
    <div className="App ">
      <Header />
      <Content/>
      <About/>
      <Projects/>
      <Blogs/>
    </div>
    
  );
}

export default App;
