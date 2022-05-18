import React from "react";
import tw from "tailwind-styled-components";
import "../dist/output.css";

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
        <Helo></Helo>
    )
}

export default App;
