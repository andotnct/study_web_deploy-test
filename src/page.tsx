"use client";
import React from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';

import Home from "./app/components/home";
import Test from "./app/components/test";
import Seminar3 from "./app/components/seminar3";
import Seminar4 from "./app/components/seminar4";



export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/seminar3" element={<Seminar3 />} />
        <Route path="/seminar4" element={<Seminar4 />} />
        
      </Routes>
    </HashRouter>
  )
}