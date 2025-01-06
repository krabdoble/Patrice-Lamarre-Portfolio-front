import React, { useState, useEffect } from 'react';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact'
import Work from './components/Work';
import Form  from './components/Form';
import { useAuth } from './providers/AuthProvider';
import { Login } from './components/Login';




function App() {
  const { user } = useAuth();

  return (
    <div className="miApp">
      <div >
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Navbar/>
                  <Home></Home>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <About></About>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/work"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Work></Work>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Contact></Contact>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/form"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Form></Form>
                </ProtectedRoute>
              }
            ></Route>
            <Route path="*" element={<div>404: Página no encontrada</div>} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("fireBaseToken");

    if (!token) {
      navigate(redirectPath);
    }
  }, []);

  return children;
};

export default App;