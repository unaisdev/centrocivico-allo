import React from 'react';
import './App.css';
import Header from './common/components/Header';
import Slider from './common/components/Slider';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="carouselContainer">
        <Slider />
      </div>
    </div>
  );
}

export default App;
