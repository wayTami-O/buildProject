import { inter } from "@/styles/fonts";

function HeaderBlock() {
    return ( 
        <>
            <div className="pt-[6.875rem] px-[0.938rem] flex justify-center items-center bg-dark">
                <div className="w-full h-[4.438rem] flex justify-center items-center border-[0.063rem] border-white rounded-[0.313rem] bg-gray23">
                    <p className={`${inter.className} text-white`}>Данные профиля</p>
                </div>
            </div>
        </>
    );
}

export default HeaderBlock;