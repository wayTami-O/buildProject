'use client'

import Image from "next/image";
import { inter, popins } from "@/styles/fonts";
import BurgerMenu from "./burgerMenu";

import { create } from "zustand";

export type pages = "Главная" | "Расчёт" | "Проекты" | "Команда" | "Франшиза" | "Контакты"

interface burgerType {
    valueBurger: boolean,
    setValueBurger: () => void,
    activePage: pages,
    setActivePage: (page: pages) => void
    animateCloseBurger: boolean,
    setAnimateCloseBurger: () => void
}

export const useBurger = create<burgerType>((set) => ({
    valueBurger: false,
    setValueBurger: () => set((state) => ({ valueBurger: !state.valueBurger })),
    activePage: "Главная",
    setActivePage: (page: pages) => set(() => ({ activePage: page })),
    animateCloseBurger: false,
    setAnimateCloseBurger: () => set(() => ({ animateCloseBurger: true }))
}))

export function Header() {

    const valueBurger = useBurger((state) => state.valueBurger)
    const setValueBurger = useBurger((state) => state.setValueBurger)

    const animateCloseBurger = useBurger((state) => state.animateCloseBurger)
    const setAnimateCloseBurger = useBurger((state) => state.setAnimateCloseBurger)

    console.log(valueBurger);
    console.log(animateCloseBurger);

    return(
        <>
            <header className={`fixed z-50 flex justify-between items-center w-full h-[4.5rem] bg-dark72 px-[1.469rem]`}>
                <div className="flex items-center gap-[0.875rem]">
                    <Image 
                        src ={'/burger-button.svg'}
                        alt="Burger button"
                        width={19}
                        height={16}
                        className="w-[1.5rem] h-[1rem]"
                        onClick={() => {
                            setValueBurger()
                            setAnimateCloseBurger()
                            // console.log('click');
                            console.log(valueBurger);
                            // console.log(animateCloseBurger);
                        }}
                    />
                    <p className={`${popins.className} text-11 text-white`}>Профиль</p>
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
            {
                valueBurger
                ? <BurgerMenu styleAnimate="animate-slideInFromLeft" />
                : animateCloseBurger 
                    ? <BurgerMenu styleAnimate="animate-slideToFromLeft transform translate-x-[-100%]" /> 
                    : null
            }
        </>
    );
}