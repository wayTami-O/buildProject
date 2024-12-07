import { inter } from "@/styles/fonts";

export interface rowTableConstructor {
    fio: string,
    address: string,
    date: string,
    agreement: string,
    price: string,
    debt: string,
    term: string
}

function RowTable({ fio, address, date, agreement, price, debt, term } : rowTableConstructor) {
    return (
        <div className="w-full h-fit flex gap-[3.125rem] p-[0.625rem] bg-transparent">
            <p className={`whitespace-nowrap pr-[3.125rem] ${inter.className} text-white text-[0.938rem]`}>{fio}</p>
            <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>{address}</p>
            <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>{date}</p>
            <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>{agreement}</p>
            <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>{price}</p>
            <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>{debt}</p>
            <p className={`whitespace-nowrap ${inter.className} text-white text-[0.938rem]`}>{term}</p>
        </div>
    )
}

export default RowTable;