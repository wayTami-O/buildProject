import { popins } from "@/styles/fonts";

function FeedbackInfo() {
    return (
        <>
            <div className="py-[2.688rem] px-[2.219rem] gap-[1.063rem] bg-dark flex flex-col justify-center items-center">
                <p className={`text-whiteF5 ${popins.className} text-[1.125rem] text-center`}>Адрес</p>
                <p className={`text-yellowOpacity ${popins.className} text-[1.125rem] text-center`}>г. Тольятти, ул. Фрунзе, д. 14Б, оф. 128</p>
                <p className={`text-whiteF5 ${popins.className} text-[1.125rem] text-center`}>Телефон</p>
                <p className={`text-yellowOpacity ${popins.className} text-[1.125rem] text-center`}> +7 (995) 933-77-07</p>
                <p className={`text-whiteF5 ${popins.className} text-[1.125rem] text-center`}>Email</p>
                <p className={`text-yellowOpacity ${popins.className} text-[1.125rem] text-center`}>oooradugaremonta@yandex.ru</p>
            </div>
        </>
    );
}

export default FeedbackInfo;