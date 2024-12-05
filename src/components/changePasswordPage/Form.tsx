'use client'

import React from 'react';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { inter, popins } from "@/styles/fonts";

const formSchema = z
    .object({
        password: z
            .string()
            .min(8, "Пароль должен содержать минимум 8 символов")
            .regex(/(?=.*[A-Za-z])(?=.*\d)/, "Пароль должен содержать буквы и цифры"),
        confirmPassword: z.string(),
        newPassword: z
            .string()
            .min(8, "Новый пароль должен содержать минимум 8 символов")
            .regex(/(?=.*[A-Za-z])(?=.*\d)/, "Новый пароль должен содержать буквы и цифры"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Пароли должны совпадать",
        path: ["confirmPassword"], // Указывает, где показывать ошибку
    });

function Form() {

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
            newPassword: "",
        },
        validationSchema: toFormikValidationSchema(formSchema),
        onSubmit: (values) => {
            console.log("Submitted values:", values);
        },
    });

    return (
        <>
            <div className="flex flex-col gap-[3.063rem] pt-[9.375rem] pb-[6.563rem] px-[0.938rem] bg-dark">
                <div className="center w-full h-[4.438rem] border-[0.063rem] border-[#FFFFFFB8] rounded-[0.313rem] bg-gray23">
                    <p className={`${inter.className} text-white text-[0.938rem]`}>Изменить пароль</p>
                </div>
                <form className="w-full flex flex-col gap-[2.375rem]">
                    <div className="w-full flex flex-col gap-[1.625rem]">

                        <div className="w-full h-fit relative border-[0.063rem] border-[#FFE39587] rounded-[0.563rem]">
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
                                        Старый пароль <span className="text-red">*</span>
                                    </span>
                                )
                            }
                        </div>

                        <div className="w-full h-fit relative border-[0.063rem] border-[#FFE39587] rounded-[0.563rem]">
                            <input
                                type="text"
                                id="confirmPassword"
                                placeholder=""
                                className="w-full px-[0.625rem] py-[0.688rem] border rounded bg-[#6363633B] text-white border-none"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.values.confirmPassword === "" && (
                                    <span className={`${popins.className} absolute z-10 top-[0.8rem] left-[0.688rem] text-gray9E`}>
                                        Новый пароль <span className="text-red">*</span>
                                    </span>
                                )
                            }
                        </div>

                        <div className="w-full h-fit relative border-[0.063rem] border-[#FFE39587] rounded-[0.563rem]">
                            <input
                                type="text"
                                id="newPassword"
                                placeholder=""
                                className="w-full px-[0.625rem] py-[0.688rem] border rounded bg-[#6363633B] text-white border-none"
                                value={formik.values.newPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.values.newPassword === "" && (
                                    <span className={`${popins.className} absolute z-10 top-[0.8rem] left-[0.688rem] text-gray9E`}>
                                        Новый пароль <span className="text-red">*</span>
                                    </span>
                                )
                            }
                        </div>
                    </div>
                    <div className="px-[0.313rem] flex flex-col center gap-[2.938rem]">
                        <p  className={`${inter.className} text-[0.813rem] text-[#BEBEBE]`}>
                            •Ваш пароль не должен совпадать с вашим именем или другой персональной информацией или быть слишком похожим на неё. <br/>•Ваш пароль должен содержать как минимум 8 символов.<br/>•Ваш пароль не может быть одним из широко распространённых паролей.<br/>•Ваш пароль не может состоять только из цифр.
                        </p>
                        {/* <ul className="list-inside">
                            <li className={`${inter.className} text-[0.813rem] text-[#BEBEBE]`}>Ваш пароль не должен совпадать с вашим именем или другой персональной информацией или быть слишком похожим на неё.</li>
                            <li className={`${inter.className} text-[0.813rem] text-[#BEBEBE]`}></li>
                            <li className={`${inter.className} text-[0.813rem] text-[#BEBEBE]`}></li>
                            <li className={`${inter.className} text-[0.813rem] text-[#BEBEBE]`}></li>
                        </ul> */}
                        <button className={`w-[12.938rem] h-[2.688rem] ${inter.className} text-[1.125rem] text-white bg-yellow70 rounded-[0.625rem]`}>Изменить пароль</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;