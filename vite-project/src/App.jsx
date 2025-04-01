import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Theme from "./context/Theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <div>
          <BrowserRouter>
            <Navbar />
            <AppRoutes />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
