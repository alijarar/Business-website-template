/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const HomeOne = lazy(() => import("./home/HomeOne"));
import HomeOne from './home/HomeOne'
const HomeTwo = lazy(() => import("./home/HomeTwo"));
const HomeThree = lazy(() => import("./home/HomeThree"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./service/Services"));
const ServiceDetailsLeftSidebar = lazy(() =>
  import("./service/ServiceDetailsLeftSidebar")
);
const Contact = lazy(() => import("./pages/Contact"));
const NoMAtch = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route path="/home-one" element={<HomeOne />} />
          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/home-three" element={<HomeThree />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/service-details-left-sidebar"
            element={<ServiceDetailsLeftSidebar />}
          />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NoMAtch />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
