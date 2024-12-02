import Form from "@/components/calculationPage/Form";
import TextBlock from "@/components/calculationPage/TextBlock";
import HeroBlock from "@/components/everyPage/HeroBlock";

function CalculationPage() {
    return (
        <>
            <HeroBlock 
                social 
                breadcrumbs="Контакты" 
                img="/contactPage.png" />
            <TextBlock />
            <Form />
        </>
    );
}

export default CalculationPage;