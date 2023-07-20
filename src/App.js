import './App.css';
import './components/ModalNavbar.css'
import React from 'react';
import ModalNavbar from './components/ModalNavbar';
import VideoComponent from './components/VideoComponent';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <VideoComponent />
    </>
  );
}
 

export default App;