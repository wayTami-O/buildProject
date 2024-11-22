import { popins } from "@/styles/fonts";
import Image from "next/image";

interface socialInfo {
    imgSrc: string,
    socialName: string
}

function SocialComponent({imgSrc, socialName} : socialInfo) {
    return (
            <div className="flex items-center gap-[0.438rem]">
                <Image 
                    src={imgSrc}
                    alt="Vk logo"
                    width={25}
                    height={14.29}
                />
                <p className={`${popins.className} text-[0.625rem]`}>{socialName}</p>
            </div>
    );
}

export default SocialComponent;