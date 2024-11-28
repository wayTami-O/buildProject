import Image from "next/image";
import SocialBlock from "@/components/everyPage/socialBlock/SocialBlock";
import SliderProcess from "@/components/homePage/SliderProcess";
import SliderStage from "@/components/homePage/SliderStage";

export function HomePage() {
  return (
    <>
      <Image 
        src={'/indexPhoto.png'}
        width={390}
        height={349}
        alt="Hero img"
        className="w-full h-[21.813rem]"
      />
      <SocialBlock />
      <SliderProcess />
      <SliderStage />
    </>
  )
}
