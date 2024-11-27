'use client'

import { popins } from "@/styles/fonts";
import Image from "next/image";
import React from "react";

export interface slideProcessType {
    title: string,
    text: React.ReactNode,
    link: string, 
    img: string
}

function SlideProcess(slideInfo: slideProcessType) {
    return (
        <div className="flex flex-col items-center justify-start gap-[1.375rem] pt-[1.438rem] w-[16.375rem] h-[21.438rem] rounded-[0.313rem] border-[0.063rem] border-yellow">
            <h2 className={`${popins.className} text-yellow uppercase text-[1.125rem]`}>{slideInfo.title}</h2>
            <Image 
                src={slideInfo.img}
                alt="slide photo"
                width={184}
                height={141}
            />
            <div className="w-[14.313rem] text-white text-center">{slideInfo.text}</div>
        </div>
    );
}

export default SlideProcess;