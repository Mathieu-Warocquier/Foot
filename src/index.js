import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import Ligues from './pages/Ligues';
import Ligue1 from './pages/Ligue1';
import PL from './pages/PL';
import Liga from './pages/Liga';
import SerieA from './pages/SerieA';
import Bundes from './pages/Bundes';
import reportWebVitals from './reportWebVitals';
import Nav from './composants/nav';
import Footer from "./composants/footer";
import Effectif from './pages/Effectif';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ligues" element={<Ligues />} />
      <Route path="/ligue1" element={<Ligue1 />} />
      <Route path="/PL" element={<PL />} />
      <Route path="/liga" element={<Liga />} />
      <Route path="/liga" element={<Liga />} />
      <Route path="/bundesliga" element={<Bundes />} />
      <Route path="/seriea" element={<SerieA />} />
      <Route path="/effectif" element={<Effectif />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
