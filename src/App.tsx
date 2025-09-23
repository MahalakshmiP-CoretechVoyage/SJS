import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { protectedRoutes } from "./routes";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './assets/font.css'

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            {protectedRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
          <Route element={<Footer />}>
            {protectedRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
