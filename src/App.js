import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/common/Navigation';
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter >
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:blogId" element={<Blog />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
