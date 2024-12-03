import { inter } from "@/styles/fonts";

export interface tableRow {
    name: string,
    volume: number,
    price: number,
    resultPrice: number
}

function TableRow({ name, volume, price, resultPrice }: tableRow) {
    return (
        <>
            <div className="flex gap-[1.75rem]">
                <p className={`w-[6.25rem] ${inter.className} text-center text-[0.938rem] text-[#A9A9A9]`}>{name}</p>
                <p className={`w-[3.125rem] ${inter.className} text-center text-[0.938rem] text-[#A9A9A9]`}>{volume}</p>
                <p className={`w-[2.375rem] ${inter.className} text-center text-[0.938rem] text-[#A9A9A9]`}>{price}</p>
                <p className={`w-[5.125rem] ${inter.className} text-center text-[0.938rem] text-[#A9A9A9]`}>{resultPrice}</p>
            </div>
        </>
    );
}

export default TableRow;