import React from "react";
import tw from "tailwind-styled-components";
import "./output.css"

import Projects from "./pages/Projects";
import Work from "./pages/Work";
import About from "./pages/About";
import ThisSite from "./pages/cfgPages/ThisSite";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARKAP4bOzivO8uNo0WucreQBNJTjjdaD4",
  authDomain: "arjunmehta01.firebaseapp.com",
  projectId: "arjunmehta01",
  storageBucket: "arjunmehta01.appspot.com",
  messagingSenderId: "1082369737700",
  appId: "1:1082369737700:web:15bb46216095b8dcbbfdf1",
  measurementId: "G-RDXYTGRC2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/work" element={<Work />} />


                <Route path="/projects/thissite" element={<ThisSite />} />

            </Routes>
        </BrowserRouter>

    );S
}

export default App;
