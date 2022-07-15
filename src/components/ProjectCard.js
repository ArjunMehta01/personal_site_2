import React from "react";
import tw from "tailwind-styled-components";

// TODO: change max for h to sensible val
const PCard = tw.div`
    grid
    grid-rows-3
    rounded-lg
    w-[33.5rem]
    md:w-[33.5rem]
    m-8
    pl-1
    md:h-80
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

const Tag = tw.div`
    flex
    bg-slate-300
    justify-center
    items-center
    align-middle
    rounded-md
    border-1
    border-black
    text-center
    w-[6rem]
    h-10
    mx-1
    mb-2
    text-sm
    font-bold
`;

const ImageHolder = tw.div`
    col-start-5
    col-span-2
    row-start-1
    row-end-4
    bg-slate-200
    rounded-r-lg
`;

const TagHolder = tw.div`
    flex
    flex-row
    flex-wrap
    justify-items-start
    items-end
    align-baseline
    col-start-1
    col-end-5
    row-start-3
    row-end-4
`;
const Title = tw.h1`
    w-[95%]
    text-4xl
`;

const TextContainer = tw.div`
    pt-1
    row-start-1
    row-end-3
    w-[95%]
    text-lg
`;

const ProjectCard = (props) => {
    return (
            <PCard onClick={props.onClick} hoverable={props.hoverable}>
                <TextContainer>
                    <Title><b>{props.title}</b></Title>
                    <p>{props.children}</p>
                </TextContainer>
                <TagHolder>
                    {props.tags.map((lang) => {
                        return <Tag key={lang}>{lang}</Tag>
                    })}
                </TagHolder>
                {/* <ImageHolder /> */}
            </PCard>       
        );

};

export default ProjectCard;
