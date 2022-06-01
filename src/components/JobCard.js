import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";

const JCard = tw.div`
    grid
    grid-cols-1
    grid-rows-2
    rounded-lg
    w-[32rem]
    m-8
    h-48
    max-w-[50%]
    bg-yellow-400
    shadow-md
    px-2
`;

const Info = tw.div`
    row-span-1
    rounded-b-lg
`;

const Header = tw.div`
    row-span-1
    rounded-t-lg
`;


// row for header row for info

const JobCard = (props) => {
    return(
        <JCard>
            <Header>
                <h1 className="text-3xl">
                    <b>{props.role}</b>
                </h1>
                <h2 className="text-2xl">
                    <b>{props.org}</b>
                </h2>
                <p>
                    {props.date}
                </p>
            </Header>
            <Info>
                <p>
                    {props.children}
                </p>
            </Info>
        </JCard>
    );
}

export default JobCard;
