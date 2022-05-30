import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const BigTextContainer = tw.div`
    content-center
    justify-center
    w-[40%]
    h-30rem
    font-extrabold
    text-black
    text-2xl
    text-wrap
`;

const FunContainer = tw.div`
    content-center
    justify-center
    w-[60%]
    h-96
    bg-slate-400
    mt-3
    ml-3
`;

const SpecialText = tw.p`
    ${props => props.color};
    text-wrap
    p-3
`

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-row flex-wrap justify-center">
                <FunContainer />
                <BigTextContainer>
                    <SpecialText>Hi I'm Arjun. I go to the <span className="text-green-700">University of Alberta</span> and study <span className="text-yellow-300">Software Engineering.</span></SpecialText>
                </BigTextContainer>
                <ProjectCard title="tester" description="test_d" tags={["Python", "c++"]}></ProjectCard>
            </div> 
        </>   
    )
}

export default Projects;
