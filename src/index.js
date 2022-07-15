import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path='/*' element={<App />} />
            </Routes>
        </AuthProvider>
        </BrowserRouter>
    </>
);