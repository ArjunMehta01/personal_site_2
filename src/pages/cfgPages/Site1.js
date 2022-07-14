import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../../components/Navbar";
import MainContainer from "../../components/MainContainer";
import { HText, PText, ListPText, MediaContainer } from "../../components/ProjectComps";
import Footer from "../../components/Footer";

const Site1 = () => {

    return (
        <>
            <Navbar/>
            <MainContainer>
                <HText>Problem</HText>
                <PText>
                    Before my second co-op term started, I realized I had worked through enough courses and projects that I needed a portfolio to showcase my experiences. However, I had never created an application without design specifications. 
                </PText>
                <HText>Solution</HText>
                <PText>
                My work at Highwood Emissions Management had introduced me to the process of creating, maintaining, and hosting a web application. I decided that firebase hosting was the best way for me to host my web page and I would use React.Js to create it. 
                <br /><br />
                I began work focusing on what I wanted to highlight in sequential order. I knew that placing an emphasis on content would allow me to create the best possible web application with my skill set. 
                </PText>
                <HText>Tools</HText>
                <ul>
                    <li>
                        <ListPText>React.js</ListPText>
                    </li>
                    <li>
                        <ListPText>Firebase</ListPText>
                    </li>
                </ul>
                {/* <HText>Design</HText>
                <MediaContainer src={AboutMe}>
                    Draft About Me Page
                </MediaContainer>
                <MediaContainer src={Projects}>
                    Draft Projects Page
                </MediaContainer>
                <MediaContainer src={Work}>
                    Draft Work Page
                </MediaContainer> */}
                <HText>Challenges</HText>
                <PText>
                    I faced several challenges throughout the creation and design of my first web application. First and foremost, I had never worked on a solo project of this magnitude before. Thus, I was at a bit of a loss as to how to effectively manage my project and prioritize tasks. Over the course of the project, I gained a lot of insight into the importance of preplanning and drafting the user experience. 
                    <br/><br/>
                    Furthermore, I struggled with the ins and outs of web development and hosting. My understanding of the fundamentals of web development was greatly developed by the challenges I faced with troubleshooting my first portfolio.
                </PText>
                <HText>Current Status</HText>
                <PText>
                    As of right now, the first version of my portfolio is still up and running. I am no longer actively contributing to the codebase. Instead, I have pivoted my focus to my new portfolio (this site).
                </PText>
                <Footer />
            </MainContainer>
        </>
    );
};

export default Site1;
