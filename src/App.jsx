import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error404 from "./components/Error404";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="min-h-screen bg-primary-bg text-primary-txt font-mono">
        <BrowserRouter>
          <Header></Header>

          <main className="p-8">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home></Home>
                  </>
                }
              ></Route>
              <Route path="/projects" element={<Projects></Projects>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
              <Route path="*" element={<Error404></Error404>}></Route>
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
