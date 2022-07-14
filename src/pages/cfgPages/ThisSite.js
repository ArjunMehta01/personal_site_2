import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../../components/Navbar";
import MainContainer from "../../components/MainContainer";
import AboutMe from "../../assets/thissite/AboutMe.png";
import Projects from "../../assets/thissite/Projects.png";
import Work from "../../assets/thissite/Work.png";
import { HText, PText, ListPText, MediaContainer } from "../../components/ProjectComps";
import Footer from "../../components/Footer";

const ThisSite = () => {

    return (
        <>
            <Navbar/>
            <MainContainer>
                <HText>Problem</HText>
                <PText>
                    After much deliberation, I realized my former portfolio site (v1) did not accurately present my past experiences. I knew I could build a better web application that allowed users to better interact with me and showcase my other personal projects. 
                </PText>
                <HText>Solution</HText>
                <PText>
                    My work with PulseMedica has allowed me to gain a great deal of front-end skills rather quickly. I worked on three complete interfaces in my time there. Likewise, through my internship I had the opportunity to take a Figma UX design course. I decided that this was the ideal project to put those skills to the test. 
                    <br /><br />
                    I first began with a simple mock-up of what I believed I wanted the site to look like (quite like the original). After receiving some design feedback from those around me, I decided a complete overhaul was needed to the wireframe design. 
                    <br /><br />
                    I knew my solution had to keep scaling in mind as I wanted whatever portfolio I designed to be dynamic in nature – constantly changing with each new experience I had. In the end, I decided to use the UI wireframes as the basis for each additional feature I modified on the website. 
                </PText>
                <HText>Tools</HText>
                <ul>
                    <li>
                        <ListPText>Figma</ListPText>
                    </li>
                    <li>
                        <ListPText>React.js</ListPText>
                    </li>
                    <li>
                        <ListPText>Styled Components</ListPText>
                    </li>
                    <li>
                        <ListPText>Tailwind CSS</ListPText>
                    </li>
                    <li>
                        <ListPText>Firebase</ListPText>
                    </li>
                </ul>
                <HText>Design</HText>
                <MediaContainer src={AboutMe}>
                    Draft About Me Page
                </MediaContainer>
                <MediaContainer src={Projects}>
                    Draft Projects Page
                </MediaContainer>
                <MediaContainer src={Work}>
                    Draft Work Page
                </MediaContainer>
                <HText>Challenges</HText>
                <PText>
                    The main challenge of this project has been prioritizing feature development and creation. Developing the minimum viable product (MVP) for my portfolio involved prioritizing exactly what features were most critical to showcasing my experiences. 
                </PText>
                <HText>Current Status</HText>
                <PText>
                    The initial MVP of my portfolio is complete. However, new features and pages are being created and updated. The nature of the application is extremely dynamic in nature and will constantly be changing and updating as I learn more!
                </PText>
                <Footer />
            </MainContainer>
        </>
    );
};

export default ThisSite;
