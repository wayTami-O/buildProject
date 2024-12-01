import { popins } from "@/styles/fonts";

function WarningVPN() {
    return (
        <>
            <div className="flex flex-col gap-[0.813rem] pt-[6.938rem] px-[0.938rem] bg-dark">
                <p className={`${popins.className} text-white text-[1.125rem] text-center`}>Зарегестрироваться</p>
                <div className="w-full h-[6.938rem] flex justify-center items-center rounded-[0.313rem] border-[0.063rem] border-white72 bg-gray23">
                    <p className={`${popins.className} text-[0.938rem] text-white`}>При регистрации отключите VPN!</p>
                </div>
            </div>
        </>
    );
}

export default WarningVPN;