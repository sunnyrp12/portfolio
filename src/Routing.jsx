import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";

import NavPanel from "./components/NavPanel";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function Routing() {

    const location = useLocation();

    return(
        <>
            <NavPanel />
            <Routes location={location} key={location.key}>
                <Route index path="/portfolio/" element={<Home />} />
                <Route path="/portfolio/about" element={<About />} />
                <Route path="/portfolio/contact" element={<Contact />} />

            </Routes>
        </>
    );
}

export default Routing;