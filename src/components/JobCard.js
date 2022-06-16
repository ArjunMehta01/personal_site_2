import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";

const JCard = tw.div`
    grid
    grid-cols-1
    grid-rows-5
    rounded-lg
    w-[32rem]
    m-8
    h-60
    max-w-[50%]
    bg-yellow-400
    shadow-md
    px-2
`;

const Info = tw.div`
    row-span-1
    rounded-b-lg
`;

const HeaderContainer = tw.div`
    row-span-2
    rounded-t-lg
`;

const BigHeader = tw.h1`
    text-3xl
`;

const SmallHeader = tw.h2`
    text-2xl
`;

// row for header row for info

const JobCard = (props) => {
    return(
        <JCard>
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
