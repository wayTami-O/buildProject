import HeroBlock from "@/components/everyPage/HeroBlock";
import Advatage from "@/components/franchisePage/Advatage";
import Offers from "@/components/franchisePage/Offers";
import WelcomeBlock from "@/components/franchisePage/Welcome";
import YandexReviews from "@/components/franchisePage/YandexReviews";

function FranchisePage() {
    return (
        <>
            <HeroBlock 
                img={"/franchise.png"}
                breadcrumbs="Франшиза" 
                social />
            <WelcomeBlock />
            <Offers />
            <Advatage />
            <YandexReviews />
        </>
    );
}

export default FranchisePage;