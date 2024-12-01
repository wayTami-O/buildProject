'use client'

import Image from "next/image"
import Breadcrumbs from "./socialBlock/Breadcrumbs"
import SocialBlock from "./socialBlock/SocialBlock"

interface heroBlockConstructor {
    social?: boolean,
    img: string,
    breadcrumbs?: string | null,

}

function HeroBlock(constr: heroBlockConstructor) {
    return (
        <>
            <Image 
                // src={'/contactPage.png'}
                src={constr.img}
                width={390}
                height={349}
                alt="hero photo"
                className="w-full h-[21.813rem]"
            />
            {
                constr.social && <Breadcrumbs text={constr.breadcrumbs ?? ""} />
            }
            <SocialBlock />
        </>
    );
}

export default HeroBlock;