import React from "react";
import tw from "tailwind-styled-components";

export const HText = tw.h1`
    text-6xl
    pb-4
    px-6
`;

export const PText = tw.p`
    text-xl
    px-6
    pr-16
    pb-10
`;

export const ListPText = tw(PText)`
    pb-4
    text-[#1ca9c9]
    font-extrabold
    text-2xl
`;

// TODO: fix such that is always image h and w
const MC = tw.div`
    flex
    flex-col
    justify-center
    my-2
    py-6
    bg-[#e8e8e8]
    mx-auto
    rounded-lg
    w-[95%]
    h-auto
    shadow-md
    items-center
`;

export const MediaContainer= (props) => {
    return (
        <MC>
            <img src={props.src} className="w-[95%] border-2"/>
            <p className="italic">{props.children}</p>
        </MC>
    );
}
