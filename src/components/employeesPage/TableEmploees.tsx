import { inter } from "@/styles/fonts";
import RowTable from "./RowTable";


function TableEmployees() {
    return (
        <>
            <div className="h-[90.75dvh] px-[0.625rem] pt-[7.563rem] bg-dark overflow-x-scroll">
                <div className="w-fit h-fit flex flex-col gap-[2.5rem] rounded-[1.25rem] overflow-hidden bg-[#1F1F1F]">
                    <div className="w-full flex gap-[3.125rem] p-[0.625rem] h-[2.375rem] bg-yellow">
                        <p className={`whitespace-nowrap pr-[3.125rem] ${inter.className} text-white text-[0.938rem]`}>Специальность</p>
                        <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>ФИО</p>
                        <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>Телефон</p>
                        <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>Номер договора</p>
                        <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>Номер договора</p>
                        <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>Сумма задолженности</p>
                        <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>Срок сдачи</p>
                    </div>
                    <RowTable speciality="Специальность" fio="ФИО" phone={"Телефон"} agreement={"Номер договора"} production={"Номер договора"} arrears={"Сумма задолженности"} term={"Срок сдачи"}   />
                </div>
            </div>
        </>
    )
}

export default TableEmployees;