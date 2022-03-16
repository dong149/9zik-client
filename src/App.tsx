import WritePage from 'pages/WritePage';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const query = useQuery();

  return (
    <Routes>
      <Route path="/" element={<HomePage token="" />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/login/oauth2/code/github" element={<HomePage token="" />} />
      <Route path="/oauth2/redirect" element={<HomePage token={query.get('token')} />} />
    </Routes>
  );
}

export default App;
