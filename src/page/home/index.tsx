import Image from "next/image";
import SocialBlock from "@/components/everyPage/socialBlock/SocialBlock";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <Image 
        src={'/indexPhoto.png'}
        width={390}
        height={349}
        alt="Hero img"
        className="w-full h-[21.813rem]"
      />
      <SocialBlock />
      
    </div>
  )
}
