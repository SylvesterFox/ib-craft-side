import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RulePage from './pages/RulePage';

function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/auth' element={<LoginPage/>}/>
        <Route path='/rule' element={<RulePage/>}/>
    </Routes>
  )
}

export default App;
