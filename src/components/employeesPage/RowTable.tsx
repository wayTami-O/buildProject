import { inter } from "@/styles/fonts";

export interface rowTableConstructor {
    speciality: string,
    fio: string,
    phone: string,
    agreement: string,
    production: string,
    arrears: string,
    term: string
}

function RowTable({ speciality, fio, phone, agreement, production, arrears, term } : rowTableConstructor) {
    return (
        <div className="w-full h-fit flex gap-[3.125rem] p-[0.625rem] bg-transparent">
            <p className={`whitespace-nowrap pr-[3.125rem] ${inter.className} text-white text-[0.938rem]`}>{speciality}</p>
            <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>{fio}</p>
            <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>{phone}</p>
            <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>{agreement}</p>
            <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>{production}</p>
            <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>{arrears}</p>
            <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>{term}</p>
        </div>
    )
}

export default RowTable;