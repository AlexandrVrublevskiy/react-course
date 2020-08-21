import React from 'react';
import './css/App.css'
import Header from './components/Header/Header.js';
import Content from './components/Profile/Profile.js';
import NavBar from './components/NavBar/NavBar.js';



function App() {
  return (
    <div className="App app-wraper">
      <Header />
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
