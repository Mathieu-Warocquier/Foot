import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import Ligues from './pages/Ligues';
import reportWebVitals from './reportWebVitals';
import Nav from './composants/nav';
import Footer from "./composants/footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ligues" element={<Ligues />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
