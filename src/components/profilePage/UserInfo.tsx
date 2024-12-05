import { popins } from "@/styles/fonts";

function UserInfo() {
    return (
        <div className="px-[1.375rem] pt-[7.625rem] bg-dark">
            <div className="flex items-center gap-[1.063rem]">
                <div className="flex justify-center items-center border-[0.063rem] border-white w-[7.813rem] h-[7.813rem] rounded-[0.313rem]">
                    <p className={`${popins.className} text-[0.625rem] text-white`}>Аватар</p>
                </div>
                <div className="flex flex-col gap-[0.875rem]">
                    <p className={`${popins.className} text-[#CBCBCB] text-[0.875rem]`}>ФИО</p>
                    <p className={`${popins.className} text-[#CBCBCB] text-[0.875rem]`}>E-MAIL</p>
                    <p className={`${popins.className} text-[#CBCBCB] text-[0.875rem]`}>Телефон</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;