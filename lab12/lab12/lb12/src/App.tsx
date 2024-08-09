import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from "./Components/Header";
import Catalog from "./Pages/Catalog/Catalog";
import {Base} from "./Scripts/Base";
import {useNavigate} from "react-router-dom";
import Card from './Components/Card';


function App() {
    const base = new Base()
    base.init();
    const all = [...base.movies, ...base.cartoons, ...base.series]
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Header/>}>
                      <Route index element={< ></>} />
                      <Route path="all" element={<Catalog films={all} type="all" />} />
                      <Route path="movies" element={<Catalog films={base.movies} type="movies" />} />
                      <Route path="cartoon" element={<Catalog films={base.cartoons} type="cartoons"/>} />
                      <Route path="series" element={<Catalog films={base.series} type="series"/>} />
                      <Route path="*" element={<p>404 page not found</p>} />
                  </Route>
                 
              </Routes>
              <Footer/>
          </BrowserRouter>
      </>

  );
}

export default App;
