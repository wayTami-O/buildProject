import { inter } from "@/styles/fonts";

function TextBlock() {
    return (
        <>
            <div className="flex flex-col items-center gap-[3.75rem] pt-[3.563rem] px-[0.938rem] bg-dark">
                <div className="w-[13.625rem] h-[18.563rem] bg-[#575757]"></div>
                <div className="w-full h-[4.438rem] flex flex-col items-center justify-center bg-gray23 border-white/[72] border-[0.063rem] rounded-[0.313rem]">
                    <p className={`w-[17.688rem] ${inter.className} text-[0.938rem] text-center text-white`}>Введите название комнаты и выберите цели ремонта</p>
                </div>
            </div>
        </>
    );
}

export default TextBlock;