import React from "react";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const pages = new Map();
pages.set("about", { path: "/about", name: "About", anchorable: true });
pages.set("contact", { path: "/contact", name: "Contact", anchorable: true });

function App() {
  return (
    <div data-testid="app-component">
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path={pages.get("about").path} element={<About />} />
          <Route path={pages.get("contact").path} element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;