import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Routas importadas
import Login from './pages/login/Login.tsx'
import Dashboard from './pages/dashboard/Dashboard.tsx';
import HomePage from './pages/home/Home.tsx';
import Registro from './pages/register/Registro.tsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/registro" element={<Registro />} />
            </Routes>
        </Router>
    );
}

export default App;