import React from "react";
import tw from "tailwind-styled-components";
import "../dist/output.css";

import Projects from "./pages/Projects";
import Work from "./pages/Work";


const Helo = tw.div`
    bg-red-800
    h-screen
`;


import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, 
    Redirect,
} from "react-router-dom";


const App = () => {
    return (
        <div className="max-h-screen">
            {/* <Projects /> */}
            <Work />
        </div>
    )
}

export default App;
