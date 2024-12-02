'use client'

import { inter, popins } from "@/styles/fonts";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Image from "next/image";
import ButtonYellow from "../everyPage/Button";

const Shcema = z.object({
    name: z.string().min(1),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
    agreeToTerms: z.boolean().refine((val) => val === true)
})

function Form() {

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            agreeToTerms: false
        },
        validationSchema: toFormikValidationSchema(Shcema),
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <>
            <div className="flex flex-col items-center gap-[3.313rem] py-[3.563rem] px-[0.875rem] bg-dark">
                <div className="w-[21rem] flex flex-col gap-[1.25rem]">
                    <p className={`${inter.className} text-center text-yellowText text-[1.25rem]`}>Начните строить свое будущее уже сегодня! Заключите договор на строительство таунхауса.</p>
                    <p className={`${inter.className} text-center text-[0.938rem] text-grayCD`}>Оставьте заявку и мы вам перезвоним</p>
                </div>
                <form className="w-[22.563rem] flex flex-col items-center gap-[1.75rem]">
                    <input 
                        className={`py-[0.688rem] px-[1.125rem] text-white h-[2.5rem] w-full border-[0.063rem] border-yellow53 bg-gray23 rounded-[0.563rem] ${inter.className} text-[0.938rem]`}
                        placeholder="Ваше имя"
                        type="text" 
                        name="name"
                        id="name"
                        value={formik.values.name} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    <input 
                        className={`py-[0.688rem] px-[1.125rem] text-white h-[2.5rem] w-full border-[0.063rem] border-yellow53 bg-gray23 rounded-[0.563rem] ${inter.className} text-[0.938rem]`}
                        placeholder="Номер телефона"
                        type="text" 
                        name="phone"
                        id="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                    <fieldset className="flex">
                        <label htmlFor="agreeToTerms" className={`${popins.className} flex gap-[0.563rem] text-white text-[0.813rem]`}>
                            <span className={`w-[1.25rem] h-[1.25rem] flex items-center justify-center border-[0.063rem] border-grayA7 rounded-[0.313rem] ${formik.values.agreeToTerms && 'bg-gray74'}`}>
                                {formik.values.agreeToTerms && (
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
                            id="agreeToTerms"
                            className="h-full hidden"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.agreeToTerms}
                        />
                    </fieldset>
                    <ButtonYellow text="Отправить" submit />
                </form>
            </div>
        </>
    );
}

export default Form;