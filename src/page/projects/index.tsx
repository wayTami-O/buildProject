'use client'

import SocialBlock from "@/components/everyPage/socialBlock/SocialBlock";
import DescriptionProject from "@/components/projectsPage/DescriptionProject";
import Form from "@/components/projectsPage/Form";
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
            <DescriptionProject
                title="Описание проекта"
                desc="Добро пожаловать в наш современный проект таунхаусов! Этот проект предлагает все, что вам нужно для комфортной и роскошной жизни:"
                listInfo={[
                    "Живи в гармонии с природой! Рядом лес и Волга.",
                    "Отделка включена: заезжай и живи!",
                    "2 сотки земли: воплоти свои садовые мечты.",
                    "Коммуникации и инженерные сети: газ, свет, вода, оптоволоконный интернет.",
                    "Уличное освещение и детская площадка: безопасность и удобство для семьи.",
                    "Экологически чистый район.",
                    "Ипотека всего от 3% годовых от Россельхозбанка.",
                    "Высокий уровень безопасности и приватности.",
                    "Развитая транспортная сеть."
                ]}
            />
            <DescriptionProject
                title="Описание проекта"
                desc="Добро пожаловать в наш современный проект таунхаусов! Этот проект предлагает все, что вам нужно для комфортной и роскошной жизни:"
                listInfo={[
                    "Живи в гармонии с природой! Рядом лес и Волга.",
                    "Отделка включена: заезжай и живи!",
                    "2 сотки земли: воплоти свои садовые мечты.",
                    "Коммуникации и инженерные сети: газ, свет, вода, оптоволоконный интернет.",
                    "Уличное освещение и детская площадка: безопасность и удобство для семьи.",
                    "Экологически чистый район.",
                    "Ипотека всего от 3% годовых от Россельхозбанка.",
                    "Высокий уровень безопасности и приватности.",
                    "Развитая транспортная сеть."
                ]}
            />
            <Form />
        </>
    );
}

export default ProjectsPage;