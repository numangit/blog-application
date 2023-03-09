import React from 'react';
import './App.css';
import Navigation from './components/home/blog/common/Navigation';
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <div >
      <Navigation />
      <Home />
      <Blog />
    </div>
  );
}

export default App;
