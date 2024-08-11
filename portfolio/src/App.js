
import { Component } from 'react';
import './App.css';
import  Header from './assets/components/Header';
import Content from './assets/components/Content';
import About from './assets/components/About';
function App() {
  return (
    <div className="App ">
      <Header />
      <Content/>
      <About/>
    </div>
    
  );
}

export default App;
