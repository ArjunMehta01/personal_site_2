import React from "react";
import tw from "tailwind-styled-components";
import { NavLink, Link, useNavigate } from "react-router-dom";

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
    let navigate = useNavigate();
    return (
        <NavContainer>
            <Name><NavLink to="/">Projects</NavLink></Name>
            <Name><Link to="/about">About Me</Link></Name>
            <Name><Link to="/work">Work</Link></Name>
            <Name>Resume</Name>
            <Name>Summary</Name>
        </NavContainer>
    );
}

export default Navbar;
