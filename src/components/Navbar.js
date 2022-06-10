import React from "react";
import tw from "tailwind-styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = tw.div`
    flex
    w-screen
    bg-emerald-300
    flex-row
    rounded-b-lg
`;

const Name = tw.p`
    p-2
`;

const Navbar = () => {
    return (
        <NavContainer>
            <Name><NavLink to="/">Projects</NavLink></Name>
            <Name><NavLink to="/about">About Me</NavLink></Name>
            <Name>Work</Name>
            <Name>Resume</Name>
            <Name>Summary</Name>
        </NavContainer>
    );
}

export default Navbar;
