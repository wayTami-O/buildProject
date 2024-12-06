import { inter, popins } from "@/styles/fonts";
import Image from "next/image";

function Advatage() {
    return (
        <>
            <div className="flex flex-col gap-[4.313rem] pt-[2.75rem] px-[0.938rem] bg-dark">
                <div className="px-[2.594rem] relative">
                    <div className="w-full py-[2.5rem] center flex-col gap-[3.625rem] relative z-30 bg-[#1F1F1F]">
                        <div className="center flex-col gap-[0.313rem]">
                            <p className={`${inter.className} text-yellow text-[3rem] text-center`}>10</p>
                            <p className={`${inter.className} text-white text-[1.5rem] text-center`}>лет опыта</p>
                        </div>
                        <div className="center flex-col gap-[0.313rem]">
                            <p className={`${inter.className} text-yellow text-[3rem] text-center`}>500</p>
                            <p className={`w-[15rem] ${inter.className} text-white text-[1.5rem] text-center`}>проектов завершено</p>
                        </div>
                        <div className="center flex-col gap-[0.313rem]">
                            <p className={`${inter.className} text-yellow text-[3rem] text-center`}>28</p>
                            <p className={`w-[15rem] ${inter.className} text-white text-[1.5rem] text-center`}>профессиональных сотрудников</p>
                        </div>
                        <div className="center flex-col gap-[0.313rem]">
                            <p className={`${inter.className} text-yellow text-[3rem] text-center`}>50</p>
                            <p className={`w-[15rem] ${inter.className} text-white text-[1.5rem] text-center`}>специализированных инструментов</p>
                        </div>
                    </div>
                    <div className="absolute -top-[0.25rem] left-[2.344rem] w-[11.188rem] h-[14.125rem] bg-yellow"></div>
                    <div className="absolute -bottom-[0.25rem] right-[2.344rem] w-[11.188rem] h-[14.125rem] bg-yellow"></div>
                </div>
                <div className="w-full center flex-col gap-[4.063rem]">
                    <div className="w-full center flex-col gap-[1.563rem] px-[0.688rem] pt-[1.125rem] pb-[2rem] border-[#E3B62154] border-[0.063rem] rounded-[0.563rem] bg-gray37">
                        <Image 
                            className="rounded-[0.313rem]"
                            src={'/room.png'} 
                            width={338}
                            height={232}
                            alt="room photo" />
                        <button className={`w-[10.688rem] h-[2.563rem] text-white ${inter.className} rounded-[0.625rem] bg-yellow70`}>Просмотр</button>
                    </div>
                    <div className="center flex-col gap-[0.75rem] text-center">
                        <p className={`${popins.className} text-center text-[0.813rem] text-yellow`}>Вот что говорят о нас наши клиенты</p>
                        <p className={`${popins.className} text-center text-[1.5rem] text-yellow`}>Честные отзывы с Яндекс Карты</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Advatage;