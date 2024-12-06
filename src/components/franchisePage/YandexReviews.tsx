import { inter } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import Review from "./Review";


function YandexReviews() {
    return ( 
        <>
            <div className="px-[1.875rem] pb-[5.438rem] pt-[2.5rem] bg-dark">
                <div className="w-full flex flex-col gap-[2.188rem] px-[0.625rem] py-[1.25rem] border-yellow border-[0.063rem] rounded-[0.313rem]">
                    
                    <div className="center flex-col gap-[1.563rem]">
                        <div className="w-[18.625rem] flex justify-between items-center">
                            <Link href={"#"} className={`${inter.className} text-[0.813rem] text-white underline`}>Ремонт Premium</Link>
                            <Link href={"#"} className={`${inter.className} text-[0.813rem] text-white underline`}>Яндекс карты</Link>
                        </div>
                        <div className="w-full flex flex-col gap-[0.938rem]">
                            <div className="w-full flex items-center gap-[0.5rem]">
                                <p className={`${inter.className} text-[2.5rem] text-white`}>3,9</p>
                                <div className="flex flex-col gap-[0.313rem]">
                                    <div className="flex gap-[0.063rem] items-center">
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
                                    <p className={`${inter.className} text-grayBE text-[0.625rem] underline underline-offset-4`}>7 отзывов • 19 оценок</p>
                                </div>
                            </div>
                            <div className="w-full h-[3.188rem] flex center gap-[1.125rem] px-[1.3rem] rounded-[0.313rem] bg-[#1E1E1EDB]">
                                <p className={`${inter.className} text-[0.688rem] text-white`}>Поставьте нам оценку</p>
                                <button className={`w-[7.875rem] h-[2.063rem] bg-[#E2B330] ${inter.className} text-[0.688rem] text-black rounded-[0.25rem]`}>Оставить отзыв</button>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-[0.625rem]">
                            <Review 
                                img="/user.png"
                                name="Гольсем Машарипова"
                                date="9 октября"
                                starCount={5}
                                review="Ремонт-это целое испытание для меня и я думаю для многих это так. Но Александр и его компания позаботились о том, чтобы все прошло быстро и без лишних напрягов. Аккуратные, исполнительные работники. Устраняют все замечания, " />
                        </div>
                        <button className={`w-[13.75rem] h-[2.5rem] ${inter.className} text-[0.688rem] text-white rounded-[0.313rem] underline underline-offset-4 bg-[#1E1E1EDE]`}>Больше отзывов на Яндекс Картах</button>
                    </div>
                
                </div>
            </div>
        </>
    );
}

export default YandexReviews;