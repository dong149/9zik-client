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
      <Route path="/login/oauth2/code/github" element={<HomePage />} />
    </Routes>
  );
}

export default App;
