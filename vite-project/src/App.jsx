import React from "react";
import "./App.css";
import { BrowserRouter } from 'react-router-dom'; 
import Navbar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
