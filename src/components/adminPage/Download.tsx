import { inter } from "@/styles/fonts";

function Download() {
    return (
        <>
            <div className="flex flex-col gap-[2.188rem] pb-[5.75rem] px-[1.75rem] bg-dark ">
                <div className="center flex-col gap-[1.5rem]">
                    <p className={`${inter.className} text-[#FFD971] text-[1.25rem] text-center`}>Обновление цен через excel файл</p>
                    <div className="flex flex-col gap-[1.063rem]">
                        <button className={`w-[18.563rem] h-[2.688rem] bg-yellow70 rounded-[0.625rem] ${inter.className} text-[1rem] text-white`}>Скачать .xlsx</button>
                        <button className={`w-[18.563rem] h-[2.688rem] bg-yellow70 rounded-[0.625rem] ${inter.className} text-[1rem] text-white`}>Загрузить .xlsx</button>
                    </div>
                </div>
                <p className={`w-[18.438rem] ${inter.className} text-[1rem] text-[#CBCBCB]`}>Тут будут отображаться системные сообщения</p>
            </div>

        </>
    );
}

export default Download;