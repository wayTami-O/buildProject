'use client'

import SocialBlock from "@/components/everyPage/socialBlock/SocialBlock";
import RoomContainer from "@/components/projectsPage/RoomContainer";
import { popins } from "@/styles/fonts";
import Image from "next/image";

function ProjectsPage() {
    return (
        <>
            <Image
                className="h-[22.875rem] w-[24.375rem]"
                src={"/projectsPage.png"}
                width={390}
                height={366}
                alt="hero photo"
            />
            <p className={`w-[16.375rem] absolute top-[7rem] left-1/2 transform -translate-x-1/2 ${popins.className} text-[0.938rem] text-white text-center`}>
            Стань хозяином своего будущего: Таунхаус под ключ через год! Всего за 4.500.000₽
            <br />
            Льготные виды ипотеки от 3% годовых (Сельская 3%, Семейная 6%, Для участников СВО 6%)
            </p>
            <SocialBlock />
            <RoomContainer />
        </>
    );
}

export default ProjectsPage;