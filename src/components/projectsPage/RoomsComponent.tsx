import { inter } from "@/styles/fonts";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'
import { Navigation } from "swiper/modules";

interface roomSwiper {
    img: string
}

interface roomConstructor {
    img: string,
    text: string
}

const arraySwiper: roomSwiper[] = [
    {
        img: "/hall.png"
    },
    {
        img: "/hall.png"
    },
    {
        img: "/hall.png"
    },
    {
        img: "/hall.png"
    },
    {
        img: "/hall.png"
    }
]

function RoomsComponent(props: roomConstructor) {
    
    const [openDialog, setOpenDialog] = useState<boolean>(false)

    return (
        <>
            <div className="w-full py-[1.25rem] px-[1.25rem] border-[0.063rem] border-yellow33 rounded-[0.563rem] bg-gray37 flex flex-col items-center gap-[0.5rem]">
                <Image 
                    className="w-[21.438rem] h-[13.875rem]"
                    src={props.img}
                    width={343}
                    height={222}
                    alt="component photo"
                />
                <p className={`${inter.className} text-[1.5rem] text-white`}>{props.text}</p>
                <button onClick={() => setOpenDialog(true)} className={` ${inter.className} w-[10.688rem] h-[2.563rem] rounded-[0.625rem] bg-yellow70 text-white`}>Просмотр</button>
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className={`center bg-transparent border-none`}>
                    <DialogTitle className="hidden"></DialogTitle>
                    
                    <p onClick={() => setOpenDialog(false)} className="absolute top-[-1rem] right-[1.25rem] text-yellow text-24">✕</p>

                    <Swiper
                        className="w-[23.75rem]"
                        spaceBetween={60}
                        navigation={{
                            nextEl: '#nextSlide',
                            prevEl: '#prevSlide'
                        }}
                        modules={[Navigation]}
                        slidesPerView={1}
                        loop
                    >
                        {
                            arraySwiper.map((el, index) => {
                                return (
                                    <SwiperSlide key={el.img+index}>
                                        <Image 
                                            src={el.img}
                                            alt="room"
                                            width={380}
                                            height={200}
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <div className="absolute left-[1.75rem] z-50 center w-[1.25rem] h-[1.5rem] bg-yellow rounded-[0.188rem] border-[0.063rem] border-black rotate-180" id="prevSlide">
                        <Image 
                            src={"/arrowSlider.svg"}
                            alt="arrow"
                            width={9}
                            height={16}
                        />
                    </div>
                    <div className="absolute right-[1.75rem] z-50 center w-[1.25rem] h-[1.5rem] bg-yellow rounded-[0.188rem] border-[0.063rem] border-black" id="nextSlide">
                        <Image 
                            src={"/arrowSlider.svg"}
                            alt="arrow"
                            width={9}
                            height={16}
                        />
                    </div>

                </DialogContent>
            </Dialog>
        </>
    );
}

export default RoomsComponent;