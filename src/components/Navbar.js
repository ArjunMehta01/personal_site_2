import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";

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
            <Name>About Me</Name>
            <Name>Projects</Name>
        </NavContainer>
    );
}

export default Navbar;
