import { inter } from "@/styles/fonts";

function AboutUs() {
    return (
        <>
            <div className="center flex-col gap-[0.813rem] px-[0.313rem] pt-[7.625rem] bg-dark">
                <div className="w-[22.5rem] h-[4.438rem] center border-[0.063rem] border-whote72 bg-gray23 rounded-[0.313rem]">
                    <p className={`${inter.className} text-white text-center text-[0.938rem]`}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
                </div>
                <p className={`${inter.className} text-[#BDBDBD] text-[0.875rem] text-center`}> Мы, <span className="text-white">РЕМОНТ</span> <span className="text-yellow">PREMIUM</span>, заботимся о вашей конфиденциальности. Настоящая политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу личную информацию, когда вы посещаете наш сайт [URL сайта] </p>
            </div>
        </>
    );
}

export default AboutUs;