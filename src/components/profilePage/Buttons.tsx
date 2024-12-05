import { inter } from "@/styles/fonts";
import Smeta, { smetaConstructor } from "./ItemSmeta";

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
        <div className="px-[1.313rem] flex flex-col justify-center gap-[3.938rem] bg-dark">
            <div className="pt-[3.125rem] flex flex-col gap-[1rem] items-center justify-center bg-dark">
                <button className={`w-[19rem] h-[2.688rem] ${inter.className} text-[1.125rem] text-[white] bg-yellow70 rounded-[0.625rem]`}>Редактировать данные</button>
                <button className={`w-[19rem] h-[2.688rem] ${inter.className} text-[1.125rem] text-[white] bg-yellow70 rounded-[0.625rem]`}>Зарегистрировать компанию</button>
                <button className={`w-[19rem] h-[2.688rem] ${inter.className} text-[1.125rem] text-[white] bg-yellow70 rounded-[0.625rem]`}>Редактировать данные</button>
            </div>
            <div className="flex flex-col gap-[1.75rem] justify-center">
                <p className={`${inter.className} text-[1.25rem] text-[#FFD971]`}>Ваш список сохраненных смет</p>
                {
                    data.map((el, index) => {
                        return <Smeta 
                            key={index} 
                            title={el.title} /> 
                    })
                }
            </div>
        </div>
    )
}

export default Buttons;