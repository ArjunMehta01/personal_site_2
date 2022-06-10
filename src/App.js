import React from "react";
import tw from "tailwind-styled-components";
import "../dist/output.css";

import Projects from "./pages/Projects";
import Work from "./pages/Work";
import About from "./pages/About";


import { 
    BrowserRouter, 
    Route,
    Routes, 
    Link, 
    Redirect,
} from "react-router-dom";

const Helo = tw.div`
    bg-red-800
    h-screen
`;

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Projects />}>
                    <Route path="work" element={<Work />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App;
