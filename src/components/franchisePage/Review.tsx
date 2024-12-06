'use client'

import { inter } from "@/styles/fonts";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface reviewConstructor {
    img: string,
    name: string,
    date: string,
    starCount: number,
    review: string
}

function Review({ img, name, date, starCount, review }: reviewConstructor) {
    
    console.log(starCount)
    
    const textRef = useRef<HTMLDivElement>(null);
    const [isTruncated, setIsTruncated] = useState(false);

    useEffect(() => {
        if (textRef.current) {
            const hasOverflow = textRef.current.scrollHeight > textRef.current.offsetHeight;
            setIsTruncated(hasOverflow);
        }
    }, [review]);

    return (
        <>
            <div className="w-full flex flex-col gap-[0.625rem]">
                <div className="flex gap-[0.375rem] items-center">
                    <Image 
                        src={img}
                        width={42}
                        height={42}
                        alt="user avatar" />
                    <div className="flex flex-col gap-[0.125rem]">
                        <p className={`${inter.className} text-[0.688rem] text-white`}>{name}</p>
                        <p className={`${inter.className} text-grayCD text-[0.688rem]`}>{date}</p>
                    </div>
                </div>
                <div className="flex gap-[0.063rem]">
                    <Image 
                        src={"/Star.svg"}
                        width={15}
                        height={15}
                        alt="star" />
                    <Image 
                        src={"/Star.svg"}
                        width={15}
                        height={15}
                        alt="star" />
                    <Image 
                        src={"/Star.svg"}
                        width={15}
                        height={15}
                        alt="star" />
                    <Image 
                        src={"/Star.svg"}
                        width={15}
                        height={15}
                        alt="star" />
                    <Image 
                        src={"/Star.svg"}
                        width={15}
                        height={15}
                        alt="star" />
                </div>
                
                <div
                    ref={textRef}
                    className="relative line-clamp-4 text-white text-[0.75rem] leading-[1rem]"
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {review}
                    {isTruncated && (
                        <span className="absolute z-10 bottom-0 right-[0.25rem] bg-gradient-to-l bg-dark to-transparent pl-1 text-[#AAAAAA]">
                            ... ещё
                        </span>
                    )}
                </div>

            </div>
        </>
    );
}

export default Review;