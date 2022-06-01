import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";


const AccompsHeader = tw.div`
    w-44
    text-wrap
`;

// stack year upon year
const Accomps = tw.div`
    grid
    grid-cols-2
`;

const AccompsContainer = tw.div`
    px-6
`;

const Year = tw.h1`
    flex
    justify-center
    align-middle

`;

const Work = () => {
    return (
        <>
            <div className="flex flex-row flex-wrap justify-center">
                <Navbar />
                <JobCard role="Software Development Intern" org="PulseMedica" date="Jan. 2022 - Present">
                    What Do I Say???
                </JobCard>
                <JobCard/>
                <JobCard/>
            </div>
            <AccompsContainer>
                <AccompsHeader>
                    <h1 className="text-4xl">
                        Events & Accomplishments
                    </h1>
                </AccompsHeader>
                <Accomps>
                        <div>
                            <Year>2022</Year>
                        </div>
                        <div>
                        </div>
                </Accomps>
            </AccompsContainer>
        </>
    );
}

export default Work;
