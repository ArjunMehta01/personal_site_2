import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../components/Navbar";


const ImageContainer = tw.div`
    w-[30rem]
    h-96
    rounded-lg
    bg-fuchsia-800
`;

const About = (props) => {

    return (
        <>
            <Navbar />
            <div className=" flex flex-row p-2 w-full">
                <div className="w-96">
                    <h1 className="text-xlg">
                        Hi my name is Arjun Mehta.
                    </h1>
                    <p>
                        I'm a fourth year software engineering student at the University of Alberta. I'm interested in web development and data analysis
                        but I'm also exploring firmware and embedded systems. I'm passionate about making a difference through technology and entr__ship. When I'm not studying or working on my latest project
                        you can find me in the gym or watching the Toronto Raptors. I'd love to connect yada yada yada some bullshit.
                    </p>
                </div>
            <ImageContainer/>
            </div>
        </>
    );
};

export default About;
