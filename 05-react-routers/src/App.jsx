import React from "react";
import { BrowserRouter,  NavLink } from "react-router-dom";
import "./App.css";
import AppRouters from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <AppRouters></AppRouters>
    </BrowserRouter>
  );
};

export default App;
