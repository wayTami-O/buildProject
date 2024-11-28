'use client'

import { inter } from "@/styles/fonts";
import Link from "next/link";

type breadcrumbsType = {
    text: string
}

function Breadcrumbs({ text }: breadcrumbsType) {
    return (
        <>
            <div className="absolute top-[17.625rem] left-1/2 flex items-center gap-[0.313rem] -translate-x-1/2">
                <Link href={"/"} className={`${inter.className} text-white`}>Главная</Link>
                <p className="text-white">/</p>
                <p className={`${inter.className} text-white`}>{text}</p>
            </div>
        </>
    );
}

export default Breadcrumbs;