import { popins } from "@/styles/fonts";

function Contacts() {
    return (
        <>
            <div className="w-full flex flex-col gap-[0.5rem] border-y-[0.063rem] border-yellow px-[1.25rem] py-[0.5rem] bg-dark">
                <div className="flex items-center justify-between">
                    <p className={`${popins.className} text-white text-13`}>Email</p>
                    <p className={`${popins.className} text-yellowOpacity text-13 underline`}>oooradugaremonta@yandex.ru</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className={`${popins.className} text-white text-13`}>Телефон</p>
                    <p className={`${popins.className} text-yellowOpacity text-13`}>+7 (995) 933-77-07</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className={`${popins.className} text-white text-13`}>Адрес</p>
                    <p className={`${popins.className} text-yellowOpacity text-13`}>г. Тольятти, ул. Фрунзе, д. 14Б, оф. 128</p>
                </div>
            </div>
            <div className="w-full h-[3.438rem] bg-dark"></div>
        </>
    );
}

export default Contacts;