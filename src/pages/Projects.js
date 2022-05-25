import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-row flex-wrap justify-center">
                <ProjectCard title="tester" description="test_d" tags={["Python", "c++"]}></ProjectCard>
            </div> 
        </>   
    )
}

export default Projects;
