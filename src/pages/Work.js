import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import Event from "../components/Event";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

const AccompsHeader = tw.div`
    w-44
    text-wrap
`;

// stack year upon year
const Accomps = tw.div`
    grid
    grid-cols-2
    py-12
`;

const AccompsContainer = tw.div`
    px-6
    m-8
    py-2
`;

const Year = tw.h1`
    flex
    justify-center
    align-middle
    my-auto

`;

// IDEA: gradients to job card
const Work = () => {

    const PulseMedica = "Wrote software for two medical devices. Designed and programmed the UX as well as implemented laser, imaging, and FPGA functionalities on the C++ backend. Part of the firmware review team and implemented a test plan for Health Canada submission.";

    const HWE = "Created a React web application aimed to provide insight into potential client's current methane emissions. The application collected over 26 data points and provided a weighted diagnostic on how well firms were reducing their emissions.";

    const Topl = "Implemented a Python wrapper package for communicating with the Topl blockchain network. The project was designed to be open sourced with the aims of providing key functionalities to future developer communities free of charge. The package was published to PyPI.";

    return (
        <>
            <Navbar current="work"/>
            <MainContainer>
                <div className="flex flex-row flex-wrap justify-center">
                    <JobCard role="Software Development Intern" org="PulseMedica" date="Jan. 2022 - Present">
                        {PulseMedica}
                    </JobCard>
                    <JobCard role="Software Intern" org="Highwood Emissions Management" date="May 2021 - Aug. 2021">
                        {HWE}
                    </JobCard>
                    <JobCard role="Engineering Intern" org="Topl" date="Apr. 2020 - Aug. 2021">
                        {Topl}
                    </JobCard>
                </div>

                {/* TODO: improve event manager */}
                <AccompsContainer>
                    <AccompsHeader>
                        <h1 className="text-4xl">
                            <b>Events & Accomplishments</b>
                        </h1>
                    </AccompsHeader>
                    <Accomps>
                            <div className=" h-full flex justify-center items-center">
                                <Year className="text-5xl">2022</Year>
                            </div>
                            <div>
                                <Event name="Elected VP Social">
                                    Elected VP Social of the University of Alberta Computer Engineering Club
                                </Event>
                                <Event name="Calgary Collegiate Programming Competition">
                                        Participated in the CCPC. Solved problem D the overall solve solve / try rate was 20%
                                </Event>
                                <Event name="Enactus Ultimate Pitch Competition">
                                    Won first place and a $3000 cash prize at the University of Alberta Enactus Ultimate Pitch Contest
                                </Event>
                                <Event name="Hack Ed 2022">
                                    Submitted the Kumquat NFT sandbox
                                </Event>
                            </div>
                    </Accomps>
                    <Accomps>
                            <div className=" h-full flex justify-center items-center">
                                <Year className="text-5xl">2021</Year>
                            </div>
                            <div>
                                <Event name="Joined U of A Computer Engineering Club"></Event>
                                <Event name="Hack Ed 2021">
                                    Submitted the Stonks Web App
                                </Event>
                            </div>
                            {/* what else do */}
                    </Accomps>
                    <Accomps className="pb-0">
                            <div className=" h-full flex justify-center items-center">
                                <Year className="text-5xl">2020</Year>
                            </div>
                            <div>
                                <Event name="Hack Ed Beta 2020">
                                    Submitted, won, and published the basketball_analysis pip package
                                </Event>
                                <Event name="Bon Hackétit 2020">
                                    Submitted LetsGetThisBread.Com
                                </Event>
                            </div>
                    </Accomps>
                </AccompsContainer>
                <Footer />
            </MainContainer>
        </>
    );
}

export default Work;
