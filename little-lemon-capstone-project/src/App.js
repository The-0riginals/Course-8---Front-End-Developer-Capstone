import React from "react";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import pages from "./utils/pages";
import Reserve from "./pages/Reserve/Reserve";
import Menu from "./pages/Menu/Menu";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div data-testid="app-component">
      <Layout>
        <Routes>

          <Route path={pages.get("about").path} element={<About />} />
          <Route path={pages.get("contact").path} element={<Contact />} />
          <Route path={pages.get("reserve").path} element={<Reserve/>} />
          <Route path={pages.get("menu").path} element={<Menu/>} />
          <Route path={pages.get("home").path} element={<Home/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;