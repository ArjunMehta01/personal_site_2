import React from "react";
import tw from "tailwind-styled-components";

const EventContainer = tw.div`
    py-4
`;

const Header = tw.p`
    text-xl
`;

const Event = (props) => {

    return (
        <EventContainer>
            <Header>
                <b>{props.name}</b>
            </Header>
            <p>
                {props.children}
            </p>
        </EventContainer>
    );
};

export default Event;
