import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Game from "../pages/game";
import Home from "../pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
