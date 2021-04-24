import React from 'react';
import jaisultan from './sounds/jai-sultan.mp3';
import jaiSultan from './images/jai-sultan.jpg';
import Header from './components/Header';
import SongList from './components/SongList';

import './App.css';

function App() {
  return (
    <div className="app mx-auto w-auto">
      <Header />
      <SongList />
    </div>
  );
}

export default App;
