import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
// TODO: change max for h to sensible val
const PCard = tw.div`
    grid
    grid-cols-5
    grid-rows-2
    rounded-lg
    w-[36rem]
    min-w-[36rem]
    m-8
    h-52
    max-w-[50%]
    bg-purple-900
    shadow-md
    hover: 
`;

const Tag = tw.div`
    flex
    bg-slate-300
    justify-center
    align-middle
    rounded-md
    border-1
    border-black
    h-6
    mx-1
    my-2
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
    justify-items-start
    items-end
    bg-red-500
    align-baseline
    col-start-1
    col-end-4
    row-start-2
    row-end-3
`;

const ProjectCard = (props) => {
    return (
            <PCard>
                <div className="col-start-1 col-end-4 row-start-1 row-end-2">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
                <TagHolder>
                    {/* align tags at bottom of page but add some padding below */}
                    {props.tags.map((lang) => {
                        return <Tag key={lang}>{lang}</Tag>
                    })}
                </TagHolder>
                <ImageHolder />
            </PCard>);

};

export default ProjectCard;
