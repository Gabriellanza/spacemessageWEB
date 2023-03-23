import React from 'react';
import { BrowserRouter, Routes, Route, Links } from 'react-router-dom'

import Login from './pages/Login.js';
import Cadastro from './pages/Cadastro.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Cadastro' element={<Cadastro/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
