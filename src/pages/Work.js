import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import Event from "../components/Event";


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
    my-auto

`;

// IDEA: gradients to job card
const Work = () => {
    return (
        <>
        
            <div className="flex flex-row flex-wrap justify-center">
                <Navbar />
                <JobCard role="Software Development Intern" org="PulseMedica" date="Jan. 2022 - Present">
                    What Do I Say???
                </JobCard>
                <JobCard role="Software Intern" org="Highwood Emissions Management" date="May 2021 - Aug. 2021">
                    Say soemthing
                </JobCard>
                <JobCard role="Engineering Intern" org="Topl" date="Apr. 2020 - Aug. 2021">

                </JobCard>
            </div>

            {/* TODO: improve event manager */}
            <AccompsContainer>
                <AccompsHeader>
                    <h1 className="text-4xl">
                        Events & Accomplishments
                    </h1>
                </AccompsHeader>
                <Accomps>
                        <div className=" h-full flex justify-center items-center">
                            <Year className="text-5xl">2022</Year>
                        </div>
                        <div>
                            <Event name="Calgary Collegiate Programming Competition">
                                Participated in the CCPC. Solved problem X percentage of teams solved
                            </Event>
                            <Event name="Enactus something something contest">
                                Won $3000 dollars and first place for startup
                            </Event>
                            <Event name="Hack Ed 2022">
                                Submitted the Kumquat NFT sandbox
                            </Event>
                        </div>
                </Accomps>
            </AccompsContainer>
        </>
    );
}

export default Work;
