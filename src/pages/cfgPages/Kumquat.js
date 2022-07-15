import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../../components/Navbar";
import MainContainer from "../../components/MainContainer";
import { HText, PText, ListPText, MediaContainer } from "../../components/ProjectComps";
import Footer from "../../components/Footer";

const Kumquat = () => {

    return (
        <>
            <Navbar/>
            <MainContainer>
                <HText className="font-bold">Kumquat NFT Sandbox</HText>
                <PText className="font-bold hover:underline text-[#1ca9c9]">
                    <a href="https://github.com/ArjunMehta01/enozmuc" target="_blank">Project Repo</a>
                </PText>
                <HText>Problem</HText>
                <PText>
                    The recent rise in blockchain based technologies has seen once technical terms become mainstage in the media. We identified several people within our lives who viewed blockchain with skepticism – mainly due to the recent NFT art media fiasco. The applications of NFTs go beyond artwork and could soon be used for activities such as signing documents. One day, possibly soon, they would be asked to trust blockchains without any understanding of how the technology worked.
                </PText>
                <HText>Solution</HText>
                <PText>
                    We determined that trust for NFT technology could best be created by designing a web application that allowed users to mint, trade, and destroy NFTs in a risk-free setting. Our goal was to provide both educational insight and a sandbox for users to discover all the practical applications of NFTs. 
                </PText>
                <HText>Tools</HText>
                <ul>
                    <li>
                        <ListPText>React.js</ListPText>
                    </li>
                    <li>
                        <ListPText>Hedera</ListPText>
                    </li>
                    <li>
                        <ListPText>Node.js</ListPText>
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
                    The main challenge of this hackathon was learning how each independent portion of the application would integrate. We were able to break down and assign tasks within their specific languages and frameworks but when it came time to integrate, the operation slowed. 
                    <br/><br/>
                    In the end, we were unable to successfully launch the application in the allotted time. The team and I learnt a lesson about process and how intermediary steps cannot be glossed over in planning. 
                </PText>
                <HText>Current Status</HText>
                <PText>
                    At the end of the hackathon, we were left with a functioning wrapper package and a skeleton web application. Since then, I have taken the time to learn more about the full stack integration progress. The Application we set out to create is currently on hold but the skillset we gained from the project is actively being applied to all ongoing projects.  
                </PText>
                <Footer />
            </MainContainer>
        </>
    );
};

export default Kumquat;
