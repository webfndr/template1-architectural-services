import './App.css';
import './components/ModalNavbar.css'
import React from 'react';
import ModalNavbar from './components/ModalNavbar';
import VideoComponent from './components/VideoComponent';

const App = () => {
  return (
    <div>
      <ModalNavbar />
      <VideoComponent />
    </div>
  );
};

export default App;
