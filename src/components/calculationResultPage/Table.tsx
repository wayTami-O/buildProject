import { inter } from "@/styles/fonts";
import TableRow, { tableRow } from "./TableRow";

interface tableConstructor {
    title: string
}

const data: tableRow[] = [
    {
        name:'Наименование',
        volume: 12,
        price: 12,
        resultPrice: 12
    },
    {
        name:'Наименование',
        volume: 12,
        price: 12,
        resultPrice: 12
    },
    {
        name:'Наименование',
        volume: 12,
        price: 12,
        resultPrice: 12
    }
]

function Table(props: tableConstructor) {
    return (
        <>
            <div className="flex flex-col gap-[] pt-[2.5rem] bg-dark px-[0.125rem]">
                <div className="flex flex-col gap-[0.875rem] px-[0.688rem] py-[1.25rem] bg-[#222222] border-[0.063rem] border-[#FFC4232B] rounded-[1.25rem]">
                    <div className="flex justify-center items-center w-full h-[2.25rem] rounded-[0.313rem] border-[#FFFFFF24] border-[0.063rem] bg-[#63636312]">
                        <p className={`${inter.className} text-[1.25rem] text-white`}>{props.title}</p>
                    </div>
                    <div className="flex flex-col gap-[1.25rem] w-full rounded-[0.313rem] overflow-hidden">
                        <div className="flex gap-[1.75rem] bg-[#A58734]">
                            <p className={`${inter.className} text-white text-[0.938rem]`}>Наименование</p>
                            <p className={`${inter.className} text-white text-[0.938rem]`}>Объем</p>
                            <p className={`${inter.className} text-white text-[0.938rem]`}>Цена</p>
                            <p className={`${inter.className} text-white text-[0.938rem]`}>Стоимость</p>
                        </div>
                        <div className="w-full flex flex-col gap-[0.75rem]">
                            {
                                data.map((el, index) => {
                                    return <TableRow name={el.name} volume={el.volume} price={el.price} resultPrice={el.resultPrice} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table;