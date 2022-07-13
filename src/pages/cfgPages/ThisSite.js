import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../../components/Navbar";
import MainContainer from "../../components/MainContainer";
import AboutMe from "../../assets/thissite/AboutMe.png";

const HText = tw.h1`
    text-5xl
    pb-4
`;

// TODO: fix such that is always image h and w
const MediaContainer = tw.div`
    my-0
    py-6
    mx-auto
    flex
    rounded-lg
    w-auto
    h-auto
    shadow-md
    items-center
    justify-center
`;


const ThisSite = () => {


    return (
        <>
            <Navbar/>
            <MainContainer>
                <HText>Problem</HText>
                <HText>Solution</HText>
                <HText>Tools</HText>
                <HText>Design</HText>
                <MediaContainer>
                    <img src={AboutMe} className="w-[75%]"/>
                </MediaContainer>
                <HText>Challenges</HText>
                <HText>Current Status</HText>
            </MainContainer>
        </>
    );
};

export default ThisSite;
