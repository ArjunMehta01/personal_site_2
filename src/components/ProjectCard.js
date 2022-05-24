import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
// TODO: change max for h to sensible val
const PCard = tw.div`
    rounded-lg
    w-[32rem]
    m-8
    h-32
    max-w-[50%]
    bg-purple-900
`;

const ProjectCard = () => {
    return (<div className="flex flex-row flex-wrap justify-center">
            <PCard>End my suffer</PCard>
            <PCard>End my suffer</PCard>
            <PCard>End my suffer</PCard>
            <PCard>End my suffer</PCard>
            <PCard>End my suffer</PCard>
            <PCard>End my suffer</PCard>
        </div>);

};

export default ProjectCard;
