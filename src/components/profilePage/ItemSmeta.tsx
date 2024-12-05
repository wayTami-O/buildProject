import { inter, popins } from "@/styles/fonts";

export interface smetaConstructor {
    title: string
}

function Smeta({title}: smetaConstructor) {
    return (
        <div className="flex gap-[1.313rem] items-center justify-center">
            <div className="w-[14rem] h-[4.063rem] flex justify-center items-center border-[0.063rem] border-yellow rounded-[0.563rem]">
                <p className={`${inter.className} text-[1ren] text-white`}>{title}</p>
            </div>
            <div className="w-[4.063rem] h-[4.063rem] flex justify-center items-center border-[#FF0000] border-[0.063rem] rounded-[0.563rem]">
                <p className={`text-white`}>✕</p>
            </div>
        </div>
    )
}

export default Smeta;