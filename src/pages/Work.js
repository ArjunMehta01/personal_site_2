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

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    const BBProduct = ""

    const BlackBerry = "Wrote software for BlackBerry IVY. Primarily worked on building proof of concepts for original equipment manufactures (OEMs)"

    const PulseMedica = "Wrote software for a medical device. Designed and programmed 3 separate interfaces. Implemented laser, imaging, and FPGA functionalities on the C++ backend. Implemented a test plan for Health Canada submission.";

    const HWE = "Created a React web application aimed to provide insight into potential client's current methane emissions. The application collected over 25 data points and provided a weighted diagnostic on how well firms were reducing their emissions.";

    const Topl = "Implemented a Python wrapper package for communicating with the Topl blockchain network. The project was designed to be open sourced with the aims of providing key functionalities to future developer communities free of charge. The package was published to PyPI.";

    return (
        <>
            <Navbar current="work"/>
            <MainContainer>
                <div className="flex flex-row flex-wrap justify-center">
                    <JobCard hoverable role="Product Management Student" org="BlackBerry" date="Sept. 2023 - Present" onClick={() => openInNewTab("https://www.blackberry.com/us/en/products/asset-tracking")}>
                        {BBProduct}
                    </JobCard>
                    <JobCard hoverable role="Software Development Student" org="BlackBerry" date="May 2023 - Aug. 2023" onClick={() => openInNewTab("https://www.blackberry.com/us/en/products/automotive/blackberry-ivy")}>
                        {BlackBerry}
                    </JobCard>
                    <JobCard hoverable role="Software Development Intern" org="PulseMedica" date="Jan. 2022 - Aug. 2022" onClick={() => openInNewTab("https://www.pulsemedica.com/")}>
                        {PulseMedica}
                    </JobCard>
                    <JobCard hoverable role="Software Intern" org="Highwood Emissions Management" date="May 2021 - Aug. 2021" onClick={() => openInNewTab("https://highwoodemissions.com/")}>
                        {HWE}
                    </JobCard>
                    <JobCard hoverable role="Engineering Intern" org="Topl" date="Apr. 2020 - Aug. 2020" onClick={() => openInNewTab("https://www.topl.co/")}>
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
                                <Year className="text-5xl">2023</Year>
                            </div>
                            <div>
                                <Event name="University of Waterloo ProdCon Case Comp">
                                    Won first place at the University of Waterloo Product Management Club Product Case Competition.
                                </Event>   
                                <Event name="CyientifIQ Innovation League Hackathon">
                                    Submitted a technical proposal for an environmental monitering IoT platform and device.
                                </Event>                                
                                <Event name="Smith School of Business EDII Case Competition">
                                    Ideated and submitted a strategy for increasing diversity in the Smith School of Business Staff.
                                </Event>
                            </div>
                    </Accomps>     
                    <Accomps>
                            <div className=" h-full flex justify-center items-center">
                                <Year className="text-5xl">2022</Year>
                            </div>
                            <div>
                                <Event name="Nathacks 2022">
                                    Submitted the <em>Remember Me</em> app aimed to detect stress in patients suffering from Alzheimer’s Disease.
                                </Event>
                                <Event name="Elected VP Social of the Computer Engineering Club">
                                    Elected VP Social of the University of Alberta Computer Engineering Club
                                </Event>
                                <Event name="Calgary Collegiate Programming Competition">
                                    Participated in the CCPC
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
                                    Won Hack Ed Beta 2020 with the basketball_analysis pip package
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
