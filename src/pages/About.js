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

const PText = tw.p`
    pb-4
`;

const HText = tw.h1`
    text-5xl
    py-4
`;

const About = (props) => {

    return (
        <>
            <Navbar />
            <MainContainer>
                <div className="flex flex-row items-center justify-center p-2">
                    <div className="w-[32rem]">
                        <HText>
                            Hi my name is <b>Arjun Mehta</b>
                        </HText>
                        <PText>
                            I'm a fourth year software engineering student at the University of Alberta. I'm interested in web development and data analysis
                            but I'm also exploring artificial intelligence. I'm passionate about making a difference through technology and entrepreneurship. When I'm not studying or working on my latest project
                            you can find me in the gym or watching the Toronto Raptors.
                        </PText>
                    </div>
                    <ImageContainer/>
                </div>
                <div className="flex flex-row items-center justify-center p-2">
                    <ImageContainer/>
                    <div className="w-[30rem] m-10">
                        <HText>
                            What's Cookin'
                        </HText>
                        <PText>
                            Outside of professional development, I've been exploring the city of Edmonton and enjoying the Alberta Summer.
                            There are a lot of different areas to explore and the weather won't stay warm forever!
                        </PText>
                    </div>
                </div>
            </MainContainer>
        </>
    );
};

export default About;
