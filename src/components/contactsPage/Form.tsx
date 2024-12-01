'use client'

import { popins } from "@/styles/fonts";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Image from "next/image";
import ButtonYellow from "../everyPage/Button";

const Shecma = z.object({
    name: z.string(),
    email: z.string().email('Введите подходящий email'),
    topic: z.string(),
    message: z.string(),
    acceptInfo: z.literal(true, {
        errorMap: () => ({ message: 'Вы должны принять условия' })
    })
})

function Form() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            topic: "",
            message: "",
            acceptInfo: false
        },
        validationSchema: toFormikValidationSchema(Shecma),
        onSubmit: (values) => {
            console.log("Был субмит");
            try {
                console.log(values);
            } catch (error) {
                console.error(error);
            }
        }
    })

    return (
        <div className="pt-[2.688rem] flex flex-col justify-center items-center bg-dark">
            <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-[0.563rem] w-[21.563rem] rounded-[1.25rem] border-[0.063rem] border-yellowWhite47 pt-[1.563rem] pb-[1.438rem] px-[1.219rem] bg-gray83"
            >
                {/* Имя */}
                <fieldset className="w-full flex flex-col">
                    <label className={`ml-[0.281rem] ${popins.className} text-white text-[0.938rem]`} htmlFor="name">Имя</label>
                    <input
                        type="text"
                        id="name"
                        className={`h-[2.563rem] bg-brown9 border-yellow69 border-[0.063rem] ${popins.className} text-white text-[0.938rem] rounded-[0.313rem] px-[0.375rem]`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                </fieldset>

                {/* Email */}
                <fieldset className="w-full flex flex-col">
                    <label className={`ml-[0.281rem] ${popins.className} text-white text-[0.938rem]`} htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className={`h-[2.563rem] bg-brown9 border-yellow69 border-[0.063rem] ${popins.className} text-white text-[0.938rem] rounded-[0.313rem] px-[0.375rem]`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                </fieldset>

                {/* Тема */}
                <fieldset className="w-full flex flex-col">
                    <label className={`ml-[0.281rem] ${popins.className} text-white text-[0.938rem]`} htmlFor="topic">Тема</label>
                    <input
                        type="text"
                        id="topic"
                        className={`h-[2.563rem] bg-brown9 border-yellow69 border-[0.063rem] ${popins.className} text-white text-[0.938rem] rounded-[0.313rem] px-[0.375rem]`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.topic}
                    />
                </fieldset>

                {/* Сообщение */}
                <fieldset className="w-full flex flex-col">
                    <label className={`ml-[0.281rem] ${popins.className} text-white text-[0.938rem]`} htmlFor="message">Текст сообщения</label>
                    <textarea
                        id="message"
                        className={`h-[5.063rem] pt-[0.25rem] bg-brown9 border-yellow69 border-[0.063rem] ${popins.className} text-white text-[0.938rem] rounded-[0.313rem] px-[0.375rem]`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                </fieldset>

                {/* Чекбокс */}
                <fieldset className="flex">
                    <label htmlFor="acceptInfo" className={`${popins.className} flex gap-[0.563rem] text-white text-[0.813rem]`}>
                        <span className={`w-[1.25rem] h-[1.25rem] flex items-center justify-center border-[0.063rem] border-grayA7 rounded-[0.313rem] ${formik.values.acceptInfo && 'bg-gray74'}`}>
                            {formik.values.acceptInfo && (
                                <Image
                                    src={'/ok.svg'}
                                    width={14}
                                    height={10}
                                    alt="ok"
                                    className="w-[0.88rem] h-[0.661rem]"
                                />
                            )}
                        </span>
                        <p>Согласен на обработку персональных данных</p>
                    </label>
                    <input
                        type="checkbox"
                        id="acceptInfo"
                        className="h-full hidden"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.acceptInfo}
                    />
                </fieldset>
                {/* Кнопка отправки */}
                <ButtonYellow text="Отправить" submit />
            </form>
        </div>
    );
}

export default Form;