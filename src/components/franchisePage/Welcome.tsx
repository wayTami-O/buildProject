import { inter } from "@/styles/fonts";

function WelcomeBlock() {
    return (
        <>
            <div className="pt-[2.5rem] px-[1.844rem] flex flex-col gap-[2.5rem] bg-dark">
                <div className="flex flex-col center gap-[0.75rem] ">
                    <p className={`w-[17.563rem] ${inter.className} text-[1.25rem] text-[#C29E3A] text-center`}>Добро пожаловать в Ремонт Премиум</p>
                    <div className="w-[20.688rem] h-[11.875rem] bg-[#4D4D4D]"></div>
                </div>
                <div className="w-full center flex-col gap-[0.563rem]">
                    <p className={`${inter.className} text-[1.5rem] text-white text-center`}>Мы создаём и воплощаем!</p>
                    <p className={`${inter.className} text-center text-[1.25rem] text-[#BDBDBD]`}>Уже на протяжении 10 лет руководящий сотав Ремонт Премиум работает в сфере строительства. Теперь мы готовы поделиться своим опытом с нашими партнёрами!</p>
                </div>
                {/* Наверное ссылки будут */}
                <div className="center flex-col gap-[0.438rem]">
                    <button className={`w-[20.563rem] h-[3.125rem] border-[0.063rem] border-white rounded-[0.25rem] ${inter.className} text-[1.25rem] text-[#DCDCDC]`}>НАША МИССИЯ</button>
                    <button className={`w-[20.563rem] h-[3.125rem] border-[0.063rem] border-yellow rounded-[0.25rem] ${inter.className} text-[1.25rem] text-yellow`}>ДЕТАЛИ</button>
                    <button className={`w-[20.563rem] h-[3.125rem] border-[0.063rem] border-white rounded-[0.25rem] ${inter.className} text-[1.25rem] text-[#DCDCDC]`}>ДЕТАЛИ</button>
                </div>
            </div>
        </>
    );
}

export default WelcomeBlock;