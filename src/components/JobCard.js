import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";

const JCard = tw.div`
    grid
    grid-rows-2
    rounded-lg
    w-[33.5rem]
    md:w-[33.5rem]
    m-8
    pl-1
    md:h-72
    max-w-[50%]
    shadow-md
    bg-[#e8e8e8]
    sm:h-auto
    sm:w-auto
    transition 
    ease-in-out
    delay-100
    ${props => props.hoverable ? `hover:cursor-pointer hover:bg-[#d2f1f8]` : ``}
`;

const Info = tw.div`
    row-span-1
    rounded-b-lg
    align-top
`;

const HeaderContainer = tw.div`
    row-span-1
    rounded-t-lg
`;

const BigHeader = tw.h1`
    text-3xl
`;

const SmallHeader = tw.h2`
    text-2xl
    text-[#1ca9c9] // new color
`;

// row for header row for info

const JobCard = (props) => {
    return(
        <JCard onClick={props.onClick} hoverable={props.hoverable}>
            <HeaderContainer>
                <BigHeader>
                    <b>{props.role}</b>
                </BigHeader>
                <SmallHeader>
                    <b>{props.org}</b>
                </SmallHeader>
                <p>
                    {props.date}
                </p>
            </HeaderContainer>
            <Info>
                <p>
                    {props.children}
                </p>
            </Info>
        </JCard>
    );
}

export default JobCard;
