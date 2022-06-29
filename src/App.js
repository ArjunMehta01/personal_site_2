import React from "react";
import tw from "tailwind-styled-components";
import "./output.css"

import Projects from "./pages/Projects";
import Work from "./pages/Work";
import About from "./pages/About";
import Navbar from "./components/Navbar";


import { 
    BrowserRouter, 
    Route,
    Routes, 
    Link, 
    Redirect
} from "react-router-dom";

const App = () => {
    return (   
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Projects />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>

    );S
}

export default App;
