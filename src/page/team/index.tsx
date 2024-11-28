'use client'

import Breadcrumbs from "@/components/everyPage/socialBlock/Breadcrumbs";
import SocialBlock from "@/components/everyPage/socialBlock/SocialBlock";
import SliderTeam from "@/components/teamPage/SliderTeam";
import Image from "next/image";

function TeamPage() {
    return (
        <>
            <Image
                src={'/teamPage.png'}
                width={390}
                height={336}
                alt="hero photo"
            />
            <Breadcrumbs text="Команда" />
            <SocialBlock />
            {/* Тут хуй знает, чушь какая то */}
            <div className="pt-[3.5rem] pb-[2.25rem] h-[5.125rem] bg-dark px-[2.563rem]"></div>
            <SliderTeam />
        </>
    );
}

export default TeamPage;