import WritePage from 'pages/WritePage';
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/write" element={<WritePage />} />
    </Routes>
  );
}

export default App;
