import React from "react";
import tw from "tailwind-styled-components";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const BigTextContainer = tw.div`
    content-center
    flex
    justify-center
    items-center
    w-[40%]
    h-30rem
    font-extrabold
    text-black
    text-2xl
    text-wrap
    w-max-full
`;

const FunContainer = tw.div`
    content-center
    justify-center
    w-[50%]
    h-96
    bg-slate-400
    mt-3
    ml-3
`;

const SpecialText = tw.p`
    ${props => props.color};
    text-wrap
    p-3
`;

const personalV2Desc = "The second version of my personal site was designed to better showcase more than just my project portfolio.";

const kuquatDesc = "Kumquat is an NFT creation sandbox designed to allow users to interact with the Hedera testnet to learn about the process of NFT creation. This project was initially created for HackEd 2022.";

const personalV1Desc = "The first version of my personal site was designed as a portfolio for my technical work.";

const dijkstraDesc = "The Dijkstra Route Finder was a school project for CMPUT275. We implemented the Dijkstra pathfinding algorithm and socket communication to mimic a GPS application for Edmonton roadways.";

// maybe no
const stonksDesc = "";

const basketballDesc = "basketball_analysis is a published pip packaged designed to allow users to predict NBA players next season fantasy basketball numbers based off past seasons stat lines and a linear regression model. This project was initially created for HackEd Beta 2021.";

const breadDesc = "LetsGetThisBread.com was a web application created using the edamame API and web scraping to help students discover new recipes based on a limited ingredient set. This project was initially created for the Bon Hackétit hackathon 2020.";




// create color change on hoverE

const Projects = () => {
    return (
        <>
        <Navbar />
        <MainContainer>
            <div className="flex flex-row flex-wrap justify-center">
                {/* <FunContainer />
                <BigTextContainer>
                    <SpecialText>Hi I'm Arjun. I go to the <span className="text-green-700">University of Alberta</span> and study <span className="text-yellow-300">Software Engineering.</span></SpecialText>
                </BigTextContainer> */}
                <ProjectCard title="This Site" tags={["React.js", "react router", "tailwind css", "styled components", "Figma"]}>{personalV2Desc}</ProjectCard>
                <ProjectCard title="Kumquat NFT Sandbox" tags={["Hedera", "Node.js","React.js", "Heroku"]}>{kuquatDesc}</ProjectCard>
                <ProjectCard title="Personal Site V1" tags={["React.js", "Firebase"]}>{personalV1Desc}</ProjectCard>
                <ProjectCard title="Dijkstra route finder" tags={["C++", "Serial Comm."]}>{dijkstraDesc}</ProjectCard>
                <ProjectCard title="basketball_analysis" tags={["Python", "Beautiful Soup", "Pandas"]}>{basketballDesc}</ProjectCard>
                <ProjectCard title="LetsGetThisBread.com" tags={["React.js", "Python", "Beautiful Soup"]}>{breadDesc}</ProjectCard>
            </div> 
            {/* add footer or for connecting */}
        </MainContainer>   
        </>
    )
}

export default Projects;
