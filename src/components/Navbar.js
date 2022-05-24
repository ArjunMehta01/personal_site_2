import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";

const NavContainer = tw.div`
    flex
    w-screen
    bg-emerald-300
    flex-row
    row
`;

const Navbar = () => {
    return (
        <NavContainer>
            <p>NIGHTMARE</p>
            <p>NIGHTMARE</p>
            <p>NIGHTMARE</p>
        </NavContainer>
    );
}

export default Navbar;
