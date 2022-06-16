import React from "react";
import tw from "tailwind-styled-components";

// TODO: change max for h to sensible val
const PCard = tw.div`
    grid
    grid-cols-5
    grid-rows-2
    rounded-lg
    w-[38rem]
    m-8
    pl-1
    h-72
    max-w-[50%]
    shadow-md
    bg-slate-200
    hover: 
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
    w-20
    h-10
    mx-1
    mb-2
    text-sm
`;

const ImageHolder = tw.div`
    col-start-4
    col-span-2
    row-start-1
    row-end-3
    bg-green-400
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
    col-end-4
    row-start-2
    row-end-3
`;
const Title = tw.h1`
    text-3xl
`;

const TextContainer = tw.div`
    col-start-1
    col-end-4
    row-start-1
    row-end-2
    w-[95%]
`;

const ProjectCard = (props) => {
    return (
            <PCard>
                <TextContainer>
                    <Title><b>{props.title}</b></Title>
                    <p>{props.children}</p>
                </TextContainer>
                <TagHolder>
                    {props.tags.map((lang) => {
                        return <Tag key={lang}>{lang}</Tag>
                    })}
                </TagHolder>
                <ImageHolder />
            </PCard>       
        );

};

export default ProjectCard;
