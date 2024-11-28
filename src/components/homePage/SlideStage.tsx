'use client'

import Image from "next/image";

export type slideStageType = {
    img: string,
    title: string, 
    text: string
}

function SlideStage(slideInfo: slideStageType) {
    return (
        <>
            <div className="w-[22.188rem] p-[1.5rem] h-full flex flex-col gap-[1rem] border-x-[0.063rem] border-x-yellow">
                <Image 
                    src={slideInfo.img}
                    width={44}
                    height={44}
                    alt="slide photo"
                />
                <div className="flex flex-col gap-[0.5rem]">
                    <h2 className="text-[1.375rem] text-yellow">{slideInfo.title}</h2>
                    <p className="text-[1rem] text-gray">{slideInfo.text}</p>
                </div>
            </div>
        </>
    );
}

export default SlideStage;