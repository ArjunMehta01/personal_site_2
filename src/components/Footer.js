import React from "react";
import tw from "tailwind-styled-components";

const FooterContainer = tw.div`
    w-max-[100vw]
    w-full
    h-28
    py-8
    self-end
`;

const FText = tw.p`
    p-2
    text-2xl
    font-semibold
    float-left
    inline-block
    pl-6
`;

const Anchor = tw.a`
    p-2
    text-2xl
    font-semibold
    float-right
    inline-block
    pr-6
    hover:delay-700
    hover:underline
`;

const Footer = () => {
    return (
        <FooterContainer>
            {/* TODO: add hover delay create components */}
            <FText className="float-left inline-block pl-6">Designed and Coded by Me (Arjun) 😎</FText>
            <Anchor href="https://github.com/ArjunMehta01">Github</Anchor>
            <Anchor href="https://www.linkedin.com/in/arjunmehta01/">LinkedIn</Anchor>
            {/* TODO maybe: https://devpost.com/arjun-mehta1001 */}
        </FooterContainer>
    );
}

export default Footer;
