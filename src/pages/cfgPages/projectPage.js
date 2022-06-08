import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../../components/Navbar";


// future this is where you build generic project page
const projectPage = (props) => {


    return (
        <>
            <Navbar />
            <div>
                {/* project name */}
                <h1>{}</h1>
                <h2>TL:DR</h2>
                <p>
                    {/* description */}
                </p>
            </div>
        </>
    );
};

export default projectPage;
