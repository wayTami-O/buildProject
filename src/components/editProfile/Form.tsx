'use client'

import React from 'react';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { inter, popins } from '@/styles/fonts';
import Link from 'next/link';
import { linksPage } from '@/common/constanst';

const formSchema = z.object({
    firstName: z.string().min(1, "Имя обязательно"),
    lastName: z.string().min(1, "Фамилия обязательна"),
    username: z
        .string()
        .min(1, "Имя пользователя обязательно")
        .max(150, "Не более 150 символов"),
    email: z.string().email("Введите корректный Email"),
    password: z
        .string()
        .min(8, "Пароль должен содержать минимум 8 символов")
        .regex(/(?=.*[A-Za-z])(?=.*\d)/, "Пароль должен содержать буквы и цифры"),
});

const Form: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
        },
        validationSchema: toFormikValidationSchema(formSchema),
        onSubmit: (values) => {
            console.log("Submitted values:", values);
        },
    });

    return (
        <div className="py-10 px-4 bg-dark">
            <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-6 justify-center items-center"
            >
                {/* Имя */}
                <div className="w-full h-fit relative border-[0.063rem] border-[#FFE39587] rounded-[0.563rem]">
                    <input
                        type="text"
                        id="firstName"
                        placeholder=""
                        className="w-full px-[0.625rem] py-[0.688rem] border rounded bg-[#6363633B] text-white border-none"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.values.firstName === "" && (
                            <span className={`${popins.className} absolute z-10 top-[0.8rem] left-[0.688rem] text-gray9E`}>
                                Имя <span className="text-red">*</span>
                            </span>
                        )
                    }
                </div>

                {/* Фамилия */}
                <div className="w-full flex flex-col gap-[1.313rem]">
                    <div className="w-full h-fit relative border-[0.063rem] border-[#FFE39587] rounded-[0.563rem]">
                        <input
                            type="text"
                            id="lastName"
                            placeholder=""
                            className="w-full px-[0.625rem] py-[0.688rem] border rounded bg-[#6363633B] text-white border-none"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.values.lastName === "" && (
                                <span className={`${popins.className} absolute z-10 top-[0.8rem] left-[0.688rem] text-gray9E`}>
                                    Фамилия <span className="text-red">*</span>
                                </span>
                            )
                        }
                    </div>
                    <p className={`w-[17.875rem] ${inter.className} text-[0.813rem] text-[#BEBEBE]`}>Обязательное поле. Не более 150 символов. Только буквы, цифры и символы @/./+/-/_.</p>
                </div>


                {/* Имя пользователя */}
                <div className="w-full h-fit relative border-[0.063rem] border-[#FFE39587] rounded-[0.563rem]">
                    <input
                        type="text"
                        id="username"
                        placeholder=""
                        className="w-full px-[0.625rem] py-[0.688rem] border rounded bg-[#6363633B] text-white border-none"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.values.username === "" && (
                            <span className={`${popins.className} absolute z-10 top-[0.8rem] left-[0.688rem] text-gray9E`}>
                                Имя пользователя <span className="text-red">*</span>
                            </span>
                        )
                    }
                </div>

                {/* Email */}
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
                                Email <span className="text-red">*</span>
                            </span>
                        )
                    }
                </div>

                {/* Пароль */}
                <div className="w-full h-fit relative border-[0.063rem] border-[#FFE39587] rounded-[0.563rem]">
                    <input
                        type="password"
                        id="password"
                        placeholder=""
                        className="w-full px-[0.625rem] py-[0.688rem] border rounded bg-[#6363633B] text-white border-none"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.values.password === "" && (
                            <span className={`${popins.className} absolute z-10 top-[0.8rem] left-[0.688rem] text-gray9E`}>
                                Пароль <span className="text-red">*</span>
                            </span>
                        )
                    }
                </div>

                {/* Кнопка отправки */}
                <button className={`w-[18.563rem] h-[2.688rem] ${inter.className} text-[1.125rem] text-white bg-yellow70 rounded-[0.625rem]`}>Сохранить изменения</button>
                <Link href={linksPage.changePassword} className={`w-[12.938rem] h-[2.688rem] center ${inter.className} text-[1.125rem] text-white bg-yellow70 rounded-[0.625rem]`}>Изменить пароль</Link>
            </form>
        </div>
    );
};

export default Form;
