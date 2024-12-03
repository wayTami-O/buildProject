import { inter, popins } from "@/styles/fonts";

function TopText() {
    return (
        <>
            <div className="w-full h-[6.5rem] bg-dark flex justify-end items-end">
                <div className="pr-[1.063rem] flex gap-[0.25rem] items-center ">
                    <p className={`${inter.className} text-white text-[0.875rem]`}>профиль</p>
                    <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#7D7D7D]"></div>
                </div>
            </div>
            <div className="pt-[2.813rem] flex justify-center items-center bg-dark">
                <p className={`${popins.className} text-[1.25rem] text-[#DCDCDC] w-[20rem] text-center`}>Смета для комнаты Зал пользователя ИМЯ ФАМИЛИЯ</p>
            </div>
        </>
    );
}

export default TopText;