'use client'

import HeroBlock from "@/components/everyPage/HeroBlock";
import SliderTeam from "@/components/teamPage/SliderTeam";

function TeamPage() {
    return (
        <>
            <HeroBlock
                img="/teamPage.png"
                social 
                breadcrumbs="Команда"
            />
            {/* Тут хуй знает, чушь какая то */}
            <div className="pt-[3.5rem] pb-[2.25rem] h-[5.125rem] bg-dark px-[2.563rem]"></div>
            <SliderTeam />
        </>
    );
}

export default TeamPage;