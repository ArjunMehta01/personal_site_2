import React from "react";
import tw from "tailwind-styled-components";

const FooterContainer = tw.div`
    flex
    bg-[#0B3C49]
    text-white
    flex-row
    w-max-[100vw]
    w-full
    h-28
`;

const FText = tw.p`
    p-2
    text-2xl
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FText>Designed and Coded by Me (Arjun) 😎</FText>
            {/* TODO: add Links floated to right */}
        </FooterContainer>
    );
}

export default Footer;
