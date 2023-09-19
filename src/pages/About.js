import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../components/Navbar";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import Me from "../assets/me.jpg";
import Elk from "../assets/elkIsland.jpg";

const ImageContainer = tw.div`
    max-h-[500px]
    h-auto
    overflow-hidden
    rounded-lg
    border-2
    relative
`;

const PText = tw.p`
    pb-4
`;

const HText = tw.h1`
    text-6xl
    py-4
`;

const About = (props) => {

    return (
        <>
            <Navbar current="about"/>
            <MainContainer>
                <div className="flex flex-row items-center justify-center p-2">
                    <div className="w-[32rem] m-4">
                        <HText>
                            Hi I'm <b>Arjun Mehta</b>
                        </HText>
                        <PText>
                            I'm a final year software engineering student at the University of Alberta. I'm interested in product management and IoT. I'm passionate about making a difference through technology and entrepreneurship. When I'm not studying or working on my latest project
                            you can find me in the gym or watching the Toronto Raptors.
                        </PText>
                    </div>
                    <ImageContainer>
                        <img src={Me} className="w-[32rem] top-[-100px] relative"/>
                    </ImageContainer>
                </div>
                <div className="flex flex-row items-center justify-center p-2">
                    <ImageContainer><img src={Elk} className="w-[600px] relative"/></ImageContainer>
                    <div className="w-[32rem] m-4">
                        <HText>
                            What's Cookin' 
                        </HText>
                        <PText>
                            Outside of starting my final year of university, I've been working on side projects and getting some much needed sun. (picture from Elk Island National Park, AB).
                        </PText>
                    </div>
                </div>
                <Footer />
            </MainContainer>
        </>
    );
};

export default About;
