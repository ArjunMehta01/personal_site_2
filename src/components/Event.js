import React from "react";
import tw from "tailwind-styled-components";


const EventContainer = tw.div`
    py-4
    bg-emerald-700
`;


const Event = (props) => {


    return (
        <EventContainer>
            <p className="text-xl">
                {props.name}
            </p>
            <p>
                {props.children}
            </p>
        </EventContainer>
    );
};

export default Event;