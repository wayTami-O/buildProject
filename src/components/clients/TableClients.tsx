import { inter } from "@/styles/fonts";
import RowTable from "./RowTable";

function TableClients() {
    return (
        <>
            <div className="h-[90.75dvh] px-[0.625rem] pt-[7.563rem] bg-dark overflow-x-scroll">
                <div className="w-fit h-fit flex flex-col gap-[2.5rem] rounded-[1.25rem] overflow-hidden bg-[#1F1F1F]">
                    <div className="w-full flex gap-[3.125rem] p-[0.625rem] h-[2.375rem] bg-yellow">
                        <p className={`whitespace-nowrap pr-[3.125rem] ${inter.className} text-white text-[0.938rem]`}>ФИО</p>
                        <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>Адрес объекта</p>
                        <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>Дата регистрации</p>
                        <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>Номер договора</p>
                        <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>Стоимость</p>
                        <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>Задолженность</p>
                        <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>Срок сдачи</p>
                    </div>
                    <RowTable fio="ФИО" address="Адрес объекта" date="Дата регистрации" agreement="Номер договора" price="Стоимость" debt="Задолженность" term="Срок сдачи" />
                </div>
            </div>
        </>
    );
}

export default TableClients;