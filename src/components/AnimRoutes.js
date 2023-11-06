import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import ImagePage from "../pages/ImagePage";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Blog from '../pages/Blog';


const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/portfolio/product/:id" element={<ImagePage />} />
        <Route path='/blog' element={<Blog/>}/>
        {/* <Route path="*" element={<Home to="/" />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
