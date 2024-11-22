import { popins } from "@/styles/fonts";

export function Footer() {
    return(
        <footer className="w-full flex justify-center items-center border-t-white border-t-[0.063rem] bg-dark pt-[1.063rem] pb-[1.25rem]">
            <p className={`${popins.className} text-white text-[0.813rem]`}>©2024 Все права защищены. РЕМОНТ <span className={`${popins.className} text-[1.063rem] text-yellow`}>PREMIUM</span></p>
        </footer>
    );
}