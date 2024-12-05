import HeroBlock from "@/components/everyPage/HeroBlock";
import WelcomeBlock from "@/components/franchisePage/Welcome";

function FranchisePage() {
    return (
        <>
            <HeroBlock 
                img={"/franchise.png"}
                breadcrumbs="Франшиза" 
                social />
            <WelcomeBlock />
        </>
    );
}

export default FranchisePage;