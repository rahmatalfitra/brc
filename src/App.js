import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"

import NavbarBlok from './globalcomponent/navbar';
import Car from './routes/mobil';
import LandingPage from './routes/home';
import MobilDetail from './routes/detailmobil';
import FormPencarian from './routes/formpencarian';
import NotFound from './routes/404notfound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="mobil">
        <Route index element={<Car />} />
        <Route path=':id' element={<MobilDetail />} />
      </Route>
      <Route path="formpencarian">
        <Route index element={<FormPencarian />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
