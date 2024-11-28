'use client'

import { pages, useBurger } from "@/components/header/index";
import { inter, popins } from "@/styles/fonts";
import Link from "next/link";
import { linksPage } from "@/common/constanst";

interface burgerButtons { 
    title: pages,
    link: string,
}

const arrayBurgerButtons: burgerButtons[] = [
    {
        title: "Главная",
        link: linksPage.main
    },
    {
        title: "Расчёт",
        link: linksPage.calculation
    },
    {
        title: "Проекты",
        link: linksPage.projects
    },
    {
        title: "Команда",
        link: linksPage.team
    },
    {
        title: "Франшиза",
        link: linksPage.franchise
    },
    {
        title: "Контакты",
        link: linksPage.contacts
    }
]

interface burgerTypeProps {
    styleAnimate: string | null
}

function BurgerMenu({ styleAnimate }: burgerTypeProps) {

    const setValueBurger = useBurger((state) => state.setValueBurger)
    const activePage = useBurger((state) => state.activePage)

    return (
        <>
            <div className={`${styleAnimate} z-50 fixed flex flex-col gap-[3.688rem] w-full h-full bg-dark px-[1.25rem] py-[1.5rem] overflow-x-scroll overflow-y-hidden`}>
                <p onClick={setValueBurger} className="absolute top-[1.5rem] left-[1.25rem] text-yellow text-24">✕</p>
                <nav className="flex items-center justify-center flex-col gap-[2.5rem] pt-[0.75rem]">
                    {
                        arrayBurgerButtons.map((el, index) => {
                            return <Link className={`${inter.className} text-[2rem] leading-[2.438rem] ${ activePage == el.title ? `text-white` : `text-greyText` }`} key={index} href={el.link}>
                                {el.title}
                                </Link>
                        })
                    }
                </nav>
                <div className="flex items-center justify-center flex-col gap-[1.625rem]">
                    <Link className={`w-[13.563rem] h-[4.625rem] flex justify-center items-center text-[1.5rem] text-white ${inter.className} font-semibold border-[0.063rem] border-yellow rounded-[1.438rem]`} href={"/signIn"}>Вход</Link>
                    <Link className={`w-[13.563rem] h-[4.625rem] flex justify-center items-center text-[1.5rem] text-white ${inter.className} font-semibold border-[0.063rem] border-yellow rounded-[1.438rem]`} href={"/login"}>Регистрация</Link>
                </div>
                <div className="w-full flex flex-col gap-[0.5rem] border-y-[0.063rem] border-yellow px-[0.625rem] py-[0.5rem]">
                    <div className="flex items-center justify-between">
                        <p className={`${popins.className} text-white text-13`}>Email</p>
                        <p className={`${popins.className} text-yellowOpacity text-13 underline`}>oooradugaremonta@yandex.ru</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className={`${popins.className} text-white text-13`}>Телефон</p>
                        <p className={`${popins.className} text-yellowOpacity text-13`}>+7 (995) 933-77-07</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BurgerMenu;