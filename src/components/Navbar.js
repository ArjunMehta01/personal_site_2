import React from "react";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const NavContainer = tw.div`
    flex
    bg-[#0B3C49]
    text-white
    flex-row
    rounded-b-lg
    w-max-[100vw]
    w-full
`;

const Name = tw.p`
    p-2
`;

const Navbar = () => {
    return (
        <NavContainer>
            <Name><Link to="/">Projects</Link></Name>
            <Name><Link to="/about">About Me</Link></Name>
            <Name><Link to="/work">Work</Link></Name>
            {/* <Name>Resume</Name>
            <Name>Summary</Name> */}
        </NavContainer>
    );
}

export default Navbar;
