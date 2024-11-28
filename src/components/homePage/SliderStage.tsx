'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import SlideStage, { slideStageType } from "./SlideStage";

const dataSwiper: slideStageType[] = [
    {
        img: '/calculateEstimate.svg',
        title: 'Расчитайте смету',
        text: 'Зарегистрируйтесь, введите название комнаты и выберите поверхность, выберите пожелания по ремонту и получите готовую смету.'
    },
    {
        img: '/calculateEstimate.svg',
        title: 'Расчитайте смету',
        text: 'Зарегистрируйтесь, введите название комнаты и выберите поверхность, выберите пожелания по ремонту и получите готовую смету.'
    },
    {
        img: '/calculateEstimate.svg',
        title: 'Расчитайте смету',
        text: 'Зарегистрируйтесь, введите название комнаты и выберите поверхность, выберите пожелания по ремонту и получите готовую смету.'
    },
    {
        img: '/calculateEstimate.svg',
        title: 'Расчитайте смету',
        text: 'Зарегистрируйтесь, введите название комнаты и выберите поверхность, выберите пожелания по ремонту и получите готовую смету.'
    }
]

function SliderStage() {
    return (
        <>
            <div className="py-[4.813rem] bg-dark border-t-[0.063rem] border-t-white">
                <Swiper
                    className="h-[15.375rem] !pl-[1rem]"
                    spaceBetween={10}
                    freeMode
                >
                    {
                        dataSwiper.map((el, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <SlideStage img={el.img} title={el.title} text={el.text} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    );
}

export default SliderStage;