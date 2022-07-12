import React from "react";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import Pdf from '../assets/ArjunResume.pdf';


const NavContainer = tw.div`
    flex
    text-black
    flex-row
    rounded-b-lg
    w-max-[100vw]
    w-full
    text-xl
`;

const Name = tw.p`
    p-2
    hover:delay-750
    hover:underline
`;

const Navbar = (props) => {
    const currentStyle = "text-[#1ca9c9] font-bold";


    return (
        <NavContainer>
            <Name className={props.current == "about" ? currentStyle : ""}><Link to="/">About Me</Link></Name>
            <Name className={props.current == "projects" ? currentStyle : ""}><Link to="/projects">Projects</Link></Name>
            <Name className={props.current == "work" ? currentStyle : ""}><Link to="/work">Work</Link></Name>
            <Name><a href={Pdf} target="_blank">Resume</a></Name>
            {/*<Name>Summary</Name> */}
        </NavContainer>
    );
}

export default Navbar;
