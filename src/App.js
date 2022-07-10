import './App.css';
import React from 'react';
import SortBar from './components/sortBar';
import ShopContent from './components/shopContent';

function App() {

  return (
    <div className="App">
      <div className='shopContent'>
        <SortBar />
        <ShopContent />
      </div>
    </div>
  );
}

export default App;
