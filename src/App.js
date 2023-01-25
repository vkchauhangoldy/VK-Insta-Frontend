import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, useNavigate, Link } from "react-router-dom";
import PostView from './PostView';
import UploadPost from './UploadPost';
import LandingPage from './LandingPage';

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/postview" element={<PostView/>}/>
        <Route path="/upload" element={<UploadPost/>}/>
        <Route path="/" element={<UploadPost/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
