import { inter } from "@/styles/fonts";
import Image from "next/image";

interface roomConstructor {
    img: string,
    text: string
}

function RoomsComponent(props: roomConstructor) {
    return (
        <>
            <div className="w-full py-[1.25rem] px-[1.25rem] border-[0.063rem] border-yellow33 rounded-[0.563rem] bg-gray37 flex flex-col items-center gap-[0.5rem]">
                <Image 
                    className="w-[21.438rem] h-[13.875rem]"
                    src={props.img}
                    width={343}
                    height={222}
                    alt="component photo"
                />
                <p className={`${inter.className} text-[1.5rem] text-white`}>{props.text}</p>
                <button className={` ${inter.className} w-[10.688rem] h-[2.563rem] rounded-[0.625rem] bg-yellow70 text-white`}>Просмотр</button>
            </div>
        </>
    );
}

export default RoomsComponent;