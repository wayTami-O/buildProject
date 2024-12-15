'use client'

import Image from "next/image";
import { inter, popins } from "@/styles/fonts";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import { linksPage } from "@/common/constanst";
import Link from "next/link";
import { useBurger } from "@/common/store/burgerStore";
import { Dialog, DialogContent } from "../ui/dialog";
import { z } from "zod";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { DialogTitle } from "@radix-ui/react-dialog";

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

const validationSchema = z.object({
    email: z
        .string()
        .email("Введите корректный email"),
    password: z
        .string()
        .min(6, "Пароль должен содержать не менее 6 символов"),
});

export function Header() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: toFormikValidationSchema(validationSchema),
        onSubmit: (values) => {
            console.log("Submitted values:", values);
        },
    });

    const [openDialog, setOpenDialog] = useState<boolean>(false)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const [forgotPassword, setPassword] = useState<boolean>(false)

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
                <p onClick={() => setOpenDialog(true)} className={`${inter.className} text-yellow text-10`}>Войти в аккаунт</p>
            </header>

            <Dialog open={openDialog}>
                <DialogContent className={`center bg-transparent border-none`}>
                    <DialogTitle className="hidden"></DialogTitle>
                    <div className={`${forgotPassword && '!hidden'} center gap-[1.813rem] flex-col min-w-[21.875rem] h-[35.75rem] bg-dark rounded-[0.625rem] pt-[3.563rem] px-[0.156rem] pb-[2.313rem]`}>
                        <div className="w-[13.438rem] h-[3.125rem] center bg-gray23 rounded-[0.313rem] border-white border-[0.063rem]">
                            <p className={`${inter.className} text-[1.25rem] text-white`}>Войти на сайт</p>
                        </div>
                        <div className="w-[21.563rem] pt-[1.875rem] pb-[1.25rem] px-[1.219rem] border-[#EEBE3978] border-[0.063rem] rounded-[0.25rem]">
                            <form className="w-full h-fit center flex-col">

                                <div className="w-full h-fit relative border-[0.063rem] border-[#FFE39587] rounded-[0.563rem]">
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder=""
                                        className="w-full px-[0.625rem] py-[0.688rem] border rounded bg-[#6363633B] text-white border-none"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.values.email === "" && (
                                            <span className={`${popins.className} absolute z-10 top-[0.8rem] left-[0.688rem] text-gray9E`}>
                                                EMAIL <span className="text-red">*</span>
                                            </span>
                                        )
                                    }
                                </div>

                                <div className="w-full h-fit mt-[2.188rem] relative border-[0.063rem] border-[#FFE39587] rounded-[0.563rem]">
                                    <input
                                        type="text"
                                        id="password"
                                        placeholder=""
                                        className="w-full px-[0.625rem] py-[0.688rem] border rounded bg-[#6363633B] text-white border-none"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.values.password === "" && (
                                            <span className={`${popins.className} absolute z-10 top-[0.8rem] left-[0.688rem] text-gray9E`}>
                                                пароль <span className="text-red">*</span>
                                            </span>
                                        )
                                    }
                                </div>

                                <button className="w-[18.563rem] h-[2.688rem] mt-[4.875rem] rounded-[0.188rem] text-center bg-yellow70 text-white">Войти</button>
                                
                                <div onClick={() => setPassword(true)} className="w-[12.75rem] h-[2.688rem] mt-[1.25rem] border-[0.063rem] border-[#858585] text-[#89D0FF] center">Забыли пароль?</div>

                            </form>
                        </div>
                        <p className={`${popins.className} text-white text-[0.813rem]`}>Нет аккаунта? <Link href={linksPage.reg} className="text-[#89D0FF]">Зарегистрироваться</Link></p>
                    </div>
                    <div className={`${!forgotPassword && '!hidden'} min-w-[21.875rem] h-[28.625rem] bg-dark rounded-[0.625rem] px-[1.375rem] py-[3.563rem] flex flex-col gap-[2.125rem]`}>
                        <div className="center w-[19.125rem] h-[4.5rem] bg-gray23 border-[0.063rem] border-white rounded-[0.313rem]">
                            <p className={`${inter.className} text-white text-[0.938rem] text-center`}>Чтобы сбросить старый пароль — введите адрес электронной почты, под которым вы регистрировались.</p>
                        </div>
                        <div className="w-[19.125rem] py-[2.063rem] px-[1.25rem] center flex-col gap-[3.75rem] border-[0.063rem] border-[#EEBE3978]">
                            <div className="w-full h-fit relative border-[0.063rem] border-[#FFE39587] rounded-[0.563rem]">
                                <input
                                    type="text"
                                    id="password"
                                    placeholder="адрес электронной почты"
                                    className="w-full px-[0.625rem] py-[0.688rem] border rounded bg-[#6363633B] text-white border-none"
                                />
                            </div>
                            <button type="button" onClick={() => setOpenDialog(false)} className="w-[16.5rem] h-[2.688rem] rounded-[0.188rem] text-center bg-yellow70 text-white">Сбросить пароль</button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <Sheet open={isOpen}>
                <SheetContent className="w-full bg-dark overflow-y-scroll flex flex-col gap-[3.688rem]" side="left">
                    <SheetTitle className="hidden">wwww</SheetTitle>
                    <p onClick={handleOpen} className="absolute top-[1.5rem] left-[1.25rem] text-yellow text-24">✕</p>
                    <nav className="flex items-center justify-center flex-col gap-[2.5rem] pt-[0.75rem]">
                        {
                            arrayBurgerButtons.map((el, index) => {
                                return <Link  
                                        className={`${inter.className} text-[2rem] leading-[2.438rem] ${ activePage == el.title ? `text-white` : `text-greyText` }`} 
                                        onClick={() => setActivePage(el.title)}
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