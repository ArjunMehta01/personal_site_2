import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../components/Navbar";
import MainContainer from "../components/MainContainer";


const ImageContainer = tw.div`
    w-[500px]
    h-[500px]
    rounded-lg
    bg-fuchsia-800
`;

const About = (props) => {

    return (
        <>
            <Navbar />
            <MainContainer>
                <div className="flex flex-row items-center justify-center p-2">
                    <div className="w-[32rem]">
                        <h1 className="text-6xl p-4">
                            Hi my name is Arjun Mehta.
                        </h1>
                        <p>
                            I'm a fourth year software engineering student at the University of Alberta. I'm interested in web development and data analysis
                            but I'm also exploring artificial intelligence. I'm passionate about making a difference through technology and entrepreneurship. When I'm not studying or working on my latest project
                            you can find me in the gym or watching the Toronto Raptors.
                        </p>
                    </div>
                    <ImageContainer/>
                </div>
                <div className="flex flex-row items-center justify-center p-2">
                    <ImageContainer/>
                    <div className="w-[30rem] m-10">
                        <h1 className="text-6xl p-4">
                            What's Cookin'
                        </h1>
                        <p>
                            Outside of professional development, ....
                        </p>
                    </div>
                </div>
            </MainContainer>
        </>
    );
};

export default About;
