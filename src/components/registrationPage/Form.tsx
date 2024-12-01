'use client'


import { popins } from "@/styles/fonts";
import CustomInput from "./Inputs/Input";
import ButtonYellow from "../everyPage/Button";
import { z } from "zod";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

const formSchema = z.object({
    firstName: z.string().min(1, "Имя обязательно"),
    lastName: z.string().min(1, "Фамилия обязательна"),
    username: z.string().min(1, "Имя пользователя обязательно").max(150, "Не более 150 символов"),
    email: z.string().email("Введите корректный Email"),
    phone: z.string().regex(/^\+?\d{10,15}$/, "Введите корректный номер телефона"),
    password: z.string()
        .min(8, "Пароль должен содержать минимум 8 символов")
        .regex(/(?=.*[A-Za-z])(?=.*\d)/, "Пароль должен содержать буквы и цифры"),
    confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
    message: "Пароли должны совпадать",
    path: ["confirmPassword"], 
});


// function Form() {

//     const formik = useFormik({
//         initialValues: {
//             firstName: "",
//             lastName: "",
//             username: "",
//             email: "",
//             phone: "",
//             password: "",
//             confirmPassword: "",
//         },
//         validationSchema: toFormikValidationSchema(formSchema),
//         onSubmit: (values) => {
//             console.log("Submitted values:", values);
//         },
//     });

//     const handleSubmit = () => {
//         console.log('wwww')
//     }

//     return (
//         <>
//             <div className="py-[2.438rem] px-[0.938rem] bg-dark">
//                 <form 
//                     onSubmit={formik.handleSubmit}
//                     className="flex flex-col gap-[2.438rem] justify-center items-center"
//                     >
//                     <div className="flex flex-col gap-[1.313rem]">
//                         <fieldset className="flex gap-[1.5rem] pb-[0.438rem]">
//                             <CustomInput 
//                                 placeholder="Имя" 
//                                 size="small" 
//                                 id="firstName" 
//                                 value={formik.values.firstName} 
//                                 onBlurProps={formik.handleBlur} 
//                                 onChangeProps={formik.handleChange} 
//                             />
//                             <CustomInput 
//                                 placeholder="Фамилия" 
//                                 size="small"  
//                                 id="lastName" 
//                                 value={formik.values.lastName} 
//                                 onBlurProps={formik.handleBlur} 
//                                 onChangeProps={formik.handleChange} 
//                             />
//                         </fieldset>
//                         <CustomInput 
//                             placeholder="Имя пользователя" 
//                             size="big"  
//                             id="username" 
//                             value={formik.values.username} 
//                             onBlurProps={formik.handleBlur} 
//                             onChangeProps={formik.handleChange} 
//                         />
//                         <p className={`${popins.className} text-[0.813rem] text-grayBE`}>Обязательное поле. Не более 150 символов. Только буквы, цифры и символы @/./+/-/_.</p>
//                     </div>
//                     <div className="flex flex-col gap-[1.75rem] w-full">
//                         <CustomInput 
//                             placeholder="Email" 
//                             size="big" 
//                             id="email"
//                             value={formik.values.email}
//                             onBlurProps={formik.handleBlur}
//                             onChangeProps={formik.handleChange} 
//                         />
//                         <CustomInput 
//                             placeholder="Номер телефона" 
//                             size="big" 
//                             id="phone"
//                             value={formik.values.phone}
//                             onBlurProps={formik.handleBlur}
//                             onChangeProps={formik.handleChange} 
//                         />
//                         <CustomInput 
//                             placeholder="Пароль" 
//                             size="big"
//                             id="password"
//                             value={formik.values.password}
//                             onBlurProps={formik.handleBlur}
//                             onChangeProps={formik.handleChange} 
//                         />
//                         <CustomInput 
//                             placeholder="Подтверждение пароля" 
//                             size="big" 
//                             id="confirmPassword"
//                             value={formik.values.confirmPassword}
//                             onBlurProps={formik.handleBlur}
//                             onChangeProps={formik.handleChange}
//                         />
//                     </div>
//                     <ul className="flex flex-col gap-[0.25rem] pl-[1.1rem] pr-[0.344rem] list-disc text-grayBE">
//                         <li className={`${popins.className} text-[0.813rem]`}>Пароль не должен быть слишком похож на другую вашу личную информацию.</li>
//                         <li className={`${popins.className} text-[0.813rem]`}>Ваш пароль должен содержать как минимум 8 символов.</li>
//                         <li className={`${popins.className} text-[0.813rem]`}>Пароль не должен быть слишком простым и распространенным.</li>
//                         <li className={`${popins.className} text-[0.813rem]`}>Пароль не может состоять только из цифр.</li>
//                     </ul>
//                     <p className={`px-[1.375rem] text-grayBE text-[0.813rem]`}>Для подтверждения введите, пожалуйста, пароль ещё раз.</p>
//                     <button type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
//                     {/* <ButtonYellow text="Зарегистрироваться" submit /> */}
//                 </form>
//             </div>
//         </>
//     );
// }

function Form() {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: toFormikValidationSchema(formSchema),
        onSubmit: (values) => {
            console.log("Submitted values:", values);
        },
    });

    const handleSubmit = () => {
        console.log('wwww')
    }

    return (
        <>
            <div className="py-[2.438rem] px-[0.938rem] bg-dark">
                <form 
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col gap-[2.438rem] justify-center items-center"
                >
                    <div className="flex flex-col gap-[1.313rem]">
                        <fieldset className="flex gap-[1.5rem] pb-[0.438rem]">
                            {/* Имя */}
                            <div className="w-[10.5rem] flex relative h-[2.5rem] py-[0.531rem] px-[0.688rem] border-yellow53 border-[0.063rem] rounded-[0.313rem] bg-gray23">
                                <input 
                                    type="text"
                                    id="firstName"
                                    className="relative z-20 w-full bg-transparent text-white"
                                    value={formik.values.firstName}
                                    onInput={(e) => formik.handleChange(e)}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                {
                                    formik.values.firstName === "" && 
                                    <span className={`${popins.className} absolute z-10 top-[0.66rem] left-[0.688rem] text-gray9E`}>
                                        Имя <span className="text-red">*</span>
                                    </span>
                                }
                            </div>
                            
                            {/* Фамилия */}
                            <div className="w-[10.5rem] flex relative h-[2.5rem] py-[0.531rem] px-[0.688rem] border-yellow53 border-[0.063rem] rounded-[0.313rem] bg-gray23">
                                <input 
                                    type="text"
                                    id="lastName"
                                    className="relative z-20 w-full bg-transparent text-white"
                                    value={formik.values.lastName}
                                    onInput={(e) => formik.handleChange(e)}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                {
                                    formik.values.lastName === "" && 
                                    <span className={`${popins.className} absolute z-10 top-[0.66rem] left-[0.688rem] text-gray9E`}>
                                        Фамилия <span className="text-red">*</span>
                                    </span>
                                }
                            </div>
                        </fieldset>
                        
                        {/* Имя пользователя */}
                        <div className="w-full flex relative h-[2.5rem] py-[0.531rem] px-[0.688rem] border-yellow53 border-[0.063rem] rounded-[0.313rem] bg-gray23">
                            <input 
                                type="text"
                                id="username"
                                className="relative z-20 w-full bg-transparent text-white"
                                value={formik.values.username}
                                onInput={(e) => formik.handleChange(e)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {
                                formik.values.username === "" && 
                                <span className={`${popins.className} absolute z-10 top-[0.66rem] left-[0.688rem] text-gray9E`}>
                                    Имя пользователя <span className="text-red">*</span>
                                </span>
                            }
                        </div>
                        <p className={`${popins.className} text-[0.813rem] text-grayBE`}>
                            Обязательное поле. Не более 150 символов. Только буквы, цифры и символы @/./+/-/_.
                        </p>
                    </div>

                    <div className="flex flex-col gap-[1.75rem] w-full">
                        {/* Email */}
                        <div className="w-full flex relative h-[2.5rem] py-[0.531rem] px-[0.688rem] border-yellow53 border-[0.063rem] rounded-[0.313rem] bg-gray23">
                            <input 
                                type="email"
                                id="email"
                                className="relative z-20 w-full bg-transparent text-white"
                                value={formik.values.email}
                                onInput={(e) => formik.handleChange(e)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {
                                formik.values.email === "" && 
                                <span className={`${popins.className} absolute z-10 top-[0.66rem] left-[0.688rem] text-gray9E`}>
                                    Email <span className="text-red">*</span>
                                </span>
                            }
                        </div>
                        
                        {/* Номер телефона */}
                        <div className="w-full flex relative h-[2.5rem] py-[0.531rem] px-[0.688rem] border-yellow53 border-[0.063rem] rounded-[0.313rem] bg-gray23">
                            <input 
                                type="tel"
                                id="phone"
                                className="relative z-20 w-full bg-transparent text-white"
                                value={formik.values.phone}
                                onInput={(e) => formik.handleChange(e)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {
                                formik.values.phone === "" && 
                                <span className={`${popins.className} absolute z-10 top-[0.66rem] left-[0.688rem] text-gray9E`}>
                                    Номер телефона <span className="text-red">*</span>
                                </span>
                            }
                        </div>
                        
                        {/* Пароль */}
                        <div className="w-full flex relative h-[2.5rem] py-[0.531rem] px-[0.688rem] border-yellow53 border-[0.063rem] rounded-[0.313rem] bg-gray23">
                            <input 
                                type="password"
                                id="password"
                                className="relative z-20 w-full bg-transparent text-white"
                                value={formik.values.password}
                                onInput={(e) => formik.handleChange(e)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {
                                formik.values.password === "" && 
                                <span className={`${popins.className} absolute z-10 top-[0.66rem] left-[0.688rem] text-gray9E`}>
                                    Пароль <span className="text-red">*</span>
                                </span>
                            }
                        </div>
                        
                        {/* Подтверждение пароля */}
                        <div className="w-full flex relative h-[2.5rem] py-[0.531rem] px-[0.688rem] border-yellow53 border-[0.063rem] rounded-[0.313rem] bg-gray23">
                            <input 
                                type="password"
                                id="confirmPassword"
                                className="relative z-20 w-full bg-transparent text-white"
                                value={formik.values.confirmPassword}
                                onInput={(e) => formik.handleChange(e)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {
                                formik.values.confirmPassword === "" && 
                                <span className={`${popins.className} absolute z-10 top-[0.66rem] left-[0.688rem] text-gray9E`}>
                                    Подтверждение пароля <span className="text-red">*</span>
                                </span>
                            }
                        </div>
                    </div>

                    <ul className="flex flex-col gap-[0.25rem] pl-[1.1rem] pr-[0.344rem] list-disc text-grayBE">
                        <li className={`${popins.className} text-[0.813rem]`}>Пароль не должен быть слишком похож на другую вашу личную информацию.</li>
                        <li className={`${popins.className} text-[0.813rem]`}>Ваш пароль должен содержать как минимум 8 символов.</li>
                        <li className={`${popins.className} text-[0.813rem]`}>Пароль не должен быть слишком простым и распространенным.</li>
                        <li className={`${popins.className} text-[0.813rem]`}>Пароль не может состоять только из цифр.</li>
                    </ul>
                    <p className={`px-[1.375rem] text-grayBE text-[0.813rem]`}>Для подтверждения введите, пожалуйста, пароль ещё раз.</p>

                    <ButtonYellow text="Зарегистрироваться" submit />
                </form>
            </div>
        </>
    );
}


export default Form;


