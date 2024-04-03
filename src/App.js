import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation  } from 'react-router-dom';
import './App.css';
import Start from './routes/Start.js';

import Login from './routes/Login.js';
import MobileLock from './routes/MobileLock.js';

import Main from './routes/Main.js';

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') {
            const redirectInterval = setInterval(() => {
                setRedirect(true);
            }, 10000);

            return () => clearInterval(redirectInterval);
        }

        return () => {};
    }, [location.pathname]);

    useEffect(() => {
        if (redirect) {
            navigate('/Login');
        }
    }, [redirect]);

    return (
        <div className="App nanumsquare">
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/Login/*" element={<Login />} />
                <Route path="/Main" element={<Main />} />
            </Routes>
        </div>
    );
}

export default App;
