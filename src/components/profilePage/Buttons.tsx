import { inter } from "@/styles/fonts";
import Smeta, { smetaConstructor } from "./ItemSmeta";
import Link from "next/link";
import { linksPage } from "@/common/constanst";

let data: smetaConstructor[] = [
    {
        title: "Смета для Зал"
    },
    {
        title: "Смета для Зал"
    }
]

function Buttons() {
    return (
        <div className="px-[1.313rem] pb-[4.75rem] flex flex-col justify-center gap-[3.938rem] bg-dark">
            <div className="pt-[3.125rem] flex flex-col gap-[1rem] items-center justify-center bg-dark">
                <Link href={linksPage.editProfile} className={`w-[19rem] h-[2.688rem] ${inter.className} text-[1.125rem] text-[white] bg-yellow70 rounded-[0.625rem] flex justify-center items-center`}>Редактировать данные</Link>
                <button className={`w-[19rem] h-[2.688rem] ${inter.className} text-[1.125rem] text-[white] bg-yellow70 rounded-[0.625rem]`}>Зарегистрировать компанию</button>
                <button className={`w-[19rem] h-[2.688rem] ${inter.className} text-[1.125rem] text-[white] bg-yellow70 rounded-[0.625rem]`}>Редактировать данные</button>
            </div>
            <div className="flex flex-col gap-[1.75rem] justify-center">
                <p className={`${inter.className} text-[1.25rem] text-[#FFD971]`}>Ваш список сохраненных смет</p>
                {
                    
                    data?.map((el, index) => {
                        return <Smeta 
                            key={index} 
                            title={el.title} /> 
                    })
                }
                <p className={`${inter.className} text-[#8E8E8E] text-[1.125rem]`}>Общая сумма смет: 225873,54</p>
                <p className={`${inter.className} text-[#CBCBCB] text-[1rem]`}>Тут будут отображаться системные сообщения</p>
            </div>
        </div>
    )
}

export default Buttons;