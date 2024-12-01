import SocialBlock from "@/components/everyPage/socialBlock/SocialBlock";
import SliderProcess from "@/components/homePage/SliderProcess";
import SliderStage from "@/components/homePage/SliderStage";
import HeroBlock from "@/components/everyPage/HeroBlock";

export function HomePage() {
  return (
    <>
      <HeroBlock img="/indexPhoto.png"  /> 
      <SliderProcess />
      <SliderStage />
    </>
  )
}
