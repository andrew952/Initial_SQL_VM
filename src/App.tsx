import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { isAuthenticatedAtom } from './store/auth';
import Login from './pages/Login';
import Register from './pages/Register';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <div>Dashboard (Coming soon)</div>
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;