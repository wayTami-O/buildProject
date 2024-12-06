import { linksPage } from "@/common/constanst";
import { inter } from "@/styles/fonts";
import Link from "next/link";

function Buttons() {
    return (
        <>
            <div className="px-[1.313rem] pb-[4.75rem] flex flex-col justify-center gap-[3.938rem] bg-dark">
                <div className="pt-[3.125rem] flex flex-col gap-[1rem] items-center justify-center bg-dark">
                    <Link href={linksPage.editProfile} className={`w-[19rem] h-[2.688rem] ${inter.className} text-[1.125rem] text-[white] bg-yellow70 rounded-[0.625rem] flex justify-center items-center`}>Редактировать данные</Link>
                    <button className={`w-[19rem] h-[2.688rem] ${inter.className} text-[1.125rem] text-[white] bg-yellow70 rounded-[0.625rem]`}>Зарегистрировать компанию</button>
                    <button className={`w-[19rem] h-[2.688rem] ${inter.className} text-[1.125rem] text-[white] bg-yellow70 rounded-[0.625rem]`}>Редактировать данные</button>
                </div>
            </div>
        </>
    );
}

export default Buttons;