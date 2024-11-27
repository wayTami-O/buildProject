'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideProcess from "./SlideProcess";
import { linksPage } from "@/common/constanst";
import { Navigation } from "swiper/modules";
import { slideProcessType } from "./SlideProcess";
import { popins } from "@/styles/fonts";
import 'swiper/swiper-bundle.css'

const dataSlider: slideProcessType[] =  [
    {
        title: "дизайн",
        text: (<p>Мы помогаем людям сделать ремонт удобно и качественно</p>),
        link: linksPage.calculation,
        img: "/design-index.png",
    },
    {
        title: "дизайн",
        text: (<p>Мы помогаем людям сделать ремонт удобно и качественно</p>),
        link: linksPage.calculation,
        img: "/design-index.png",
    },
    {
        title: "дизайн",
        text: (<p>Мы помогаем людям сделать ремонт удобно и качественно</p>),
        link: linksPage.calculation,
        img: "/design-index.png",
    }
]

function SliderProcess() {
    return (
        <div className="pt-[6.125rem] pb-[4.813rem] px-[1.125rem] bg-dark flex justify-between items-center">
            <div id="prevEl">
                <Image 
                    src="/arrow.svg"
                    alt="arrow"
                    width={33}
                    height={33}
                />
            </div>

            <Swiper
                className="w-[16.375rem]"
                spaceBetween={60}
                navigation={{
                    nextEl: '#nextEl',
                    prevEl: '#prevEl'
                }}
                modules={[Navigation]}
                slidesPerView={1}
                loop
            >
                {dataSlider.map((el, index) => {
                    return (
                        <SwiperSlide>
                            <SlideProcess 
                                key={index} 
                                title={el.title}
                                text={el.text}
                                link={el.link}
                                img={el.img}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            
            <div className="rotate-180" id="nextEl">
                <Image 
                    src="/arrow.svg"
                    alt="arrow"
                    width={33}
                    height={33}
                />
            </div>
        </div>
    );
}

export default SliderProcess;