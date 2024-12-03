import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './parts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Faculties from './pages/Faculties';
import DetailFaculty from './pages/DetailFaculty';
import StateDemo from './pages/StateDemo';
import DemoCalc from './pages/DemoCalc';
import CrudOperation from './pages/CrudOperation';
import FetchDemo from './pages/FetchDemo';
import EffectDemo from './pages/EffectDemo';
import DetailSubject from './pages/DetailSubject';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faculties" element={<Faculties/>} />
        <Route path="/faculty/:id" element={<DetailFaculty/>} />
        <Route path="/state" element={<StateDemo/>} />
        <Route path="/calc" element={<DemoCalc/>} />
        <Route path="/crud" element={<CrudOperation/>} />
        <Route path="/fetch" element={<FetchDemo/>} />
        <Route path="/effect" element={<EffectDemo/>} />
        <Route path="/subject/:id" element={<DetailSubject/>} />

      </Route>
    </Routes>
  </BrowserRouter>
);