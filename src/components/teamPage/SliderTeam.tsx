'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SlideTeam, { slideTeamType } from "./SlideTeam";
import { Navigation } from "swiper/modules";
import 'swiper/swiper-bundle.css'

const dataSlide: slideTeamType[] = [
    {
        name: 'Елена Чуйкина',
        jobTitle: 'Ведущий дизайнер',
        img: '/worker.png',
        text: 'Клиенты ценят ее за неиссякаемую фантазию, творческий подход к делу, умение слышать и понимать их потребности. Отмечают ее внимательность к мелочам и ответственность. '
    },
    {
        name: 'Елена Чуйкина',
        jobTitle: 'Ведущий дизайнер',
        img: '/worker.png',
        text: 'Клиенты ценят ее за неиссякаемую фантазию, творческий подход к делу, умение слышать и понимать их потребности. Отмечают ее внимательность к мелочам и ответственность. '
    },
    {
        name: 'Елена Чуйкина',
        jobTitle: 'Ведущий дизайнер',
        img: '/worker.png',
        text: 'Клиенты ценят ее за неиссякаемую фантазию, творческий подход к делу, умение слышать и понимать их потребности. Отмечают ее внимательность к мелочам и ответственность. '
    },
    {
        name: 'Елена Чуйкина',
        jobTitle: 'Ведущий дизайнер',
        img: '/worker.png',
        text: 'Клиенты ценят ее за неиссякаемую фантазию, творческий подход к делу, умение слышать и понимать их потребности. Отмечают ее внимательность к мелочам и ответственность. '
    }
]

function SliderTeam() {
    return (
        <>
            <div className="flex justify-between items-center px-[1rem] pb-[5.813rem] bg-dark">
                <div id="nextEl">
                    <Image 
                        src="/arrow.svg"
                        alt="arrow"
                        width={33}
                        height={33}
                    />
                </div>
                {/* <SlideTeam name={dataSlide[0].name} img={dataSlide[0].img} jobTitle={dataSlide[0].jobTitle} text={dataSlide[0].text} /> */}
                <Swiper
                    className="h-[27.563rem] w-[16.438rem]"
                    autoHeight
                    navigation={{
                        nextEl: '#nextEl',
                        prevEl: '#prevEl'
                    }}
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={50}
                >
                    {
                        dataSlide.map((el, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <SlideTeam name={el.name} jobTitle={el.jobTitle} img={el.img} text={el.text} />
                                </SwiperSlide>
                            )
                        })
                    }
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
        </>
    );
}

export default SliderTeam;