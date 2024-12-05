'use client'

import Image from "next/image";
import { inter, popins } from "@/styles/fonts";
// import BurgerMenu from "./burgerMenu";
import { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { linksPage } from "@/common/constanst";
import Link from "next/link";
import { useBurger } from "@/common/store/burgerStore";

export type pages = "Главная" | "Расчёт" | "Проекты" | "Команда" | "Франшиза" | "Контакты"

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

export function Header() {

    // const valueBurger = useBurger((state) => state.valueBurger)
    // const setValueBurger = useBurger((state) => state.setValueBurger)

    // const animateCloseBurger = useBurger((state) => state.animateCloseBurger)
    // const setAnimateCloseBurger = useBurger((state) => state.setAnimateCloseBurger)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const activePage = useBurger((state) => state.activePage)

    const setActivePage = useBurger((state) => state.setActivePage)

    return(
        <>
            <header className={`fixed z-40 flex justify-between items-center w-full h-[4.5rem] bg-dark72 px-[1.469rem]`}>
                <div className="flex items-center gap-[0.875rem]">
                    <Image 
                        src ={'/burger-button.svg'}
                        alt="Burger button"
                        width={19}
                        height={16}
                        className="w-[1.5rem] h-[1rem]"
                        onClick={handleOpen}
                    />
                    <Link href={linksPage.profile} className={`${popins.className} text-11 text-white`}>Профиль</Link>
                </div>
                <div className="flex flex-col justify-center items-center gap-[0.313rem]">
                    <Image 
                        src={'/logo.png'}
                        alt="Logo"
                        width={29}
                        height={37}
                        className="w-[1.813rem] h-[2.313rem]"
                    />
                    <p className={`${inter.className} text-white text-11`}>РЕМОНТ <span className="text-yellow">PREMIUM</span></p>
                </div>
                <p className={`${inter.className} text-yellow text-10`}>Войти в аккаунт</p>
            </header>

            <Sheet open={isOpen}>
                <SheetContent className="w-full bg-dark overflow-y-scroll flex flex-col gap-[3.688rem]" side="left">
                    <SheetTitle className="hidden">wwww</SheetTitle>
                    <p onClick={handleOpen} className="absolute top-[1.5rem] left-[1.25rem] text-yellow text-24">✕</p>
                    <nav className="flex items-center justify-center flex-col gap-[2.5rem] pt-[0.75rem]">
                        {
                            arrayBurgerButtons.map((el, index) => {
                                return <Link  
                                        className={`${inter.className} text-[2rem] leading-[2.438rem] ${ activePage == el.title ? `text-white` : `text-greyText` }`} 
                                        key={index} href={el.link}>
                                        {el.title}
                                    </Link>
                            })
                        }
                    </nav>
                    <div className="flex items-center justify-center flex-col gap-[1.625rem]">
                        <Link className={`w-[13.563rem] h-[4.625rem] flex justify-center items-center text-[1.5rem] text-white ${inter.className} font-semibold border-[0.063rem] border-yellow rounded-[1.438rem]`} href={linksPage.sign}>Вход</Link>
                        <Link className={`w-[13.563rem] h-[4.625rem] flex justify-center items-center text-[1.5rem] text-white ${inter.className} font-semibold border-[0.063rem] border-yellow rounded-[1.438rem]`} href={linksPage.reg}>Регистрация</Link>
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
                </SheetContent>
            </Sheet>
        </>
    );
}