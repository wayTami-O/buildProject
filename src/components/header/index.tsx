import Image from "next/image";
import { inter, popins } from "@/styles/fonts";

export function Header() {
    return(
        <header className={`fixed flex justify-between items-center w-full h-[4.5rem] bg-dark72 px-[1.469rem]`}>
            <div className="flex items-center gap-[0.875rem]">
                <Image 
                    src ={'/burger-button.svg'}
                    alt="Burger button"
                    width={19}
                    height={16}
                    className="w-[1.5rem] h-[1rem]"
                />
                <p className={`${popins.className} text-11 text-white`}>Профиль</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-[0.313rem]">
                <Image 
                    src={'/logo.png'}
                    alt="Logo"
                    width={29}
                    height={37}
                    className="w-[1.813rem] h-[2.313rem]"
                />
                <p className={`${inter.className} text-white text-11`}>РЕМОНТ <span className="text-yellow">PREMIUM</span></p>
            </div>
            <p className={`${inter.className} text-yellow text-10`}>Войти в аккаунт</p>
        </header>
    );
}