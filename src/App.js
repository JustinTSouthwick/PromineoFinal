import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Top3Brands from './pages/Top3Brands';
import VotePage from './pages/VotePage';
import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/top3brands' element={<Top3Brands />}/>
          <Route path='/votepage' element={<VotePage />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}


