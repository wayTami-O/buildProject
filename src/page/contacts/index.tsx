import FeedbackInfo from "@/components/contactsPage/FeedbackInfo";
import Form from "@/components/contactsPage/Form";
import YandexMap from "@/components/contactsPage/YandexMap";
import HeroBlock from "@/components/everyPage/HeroBlock";
import { popins } from "@/styles/fonts";

function ContactsPage() {
    return (
        <>
            <HeroBlock social breadcrumbs="Контакты" img="/contactPage.png" />
            {/* Ради двух строк текста решил не делать компонент */}
            <div className="pt-[3.875rem] bg-dark flex flex-col justify-center items-center">
                <p className={`text-whiteYellow text-[1rem] ${popins.className}`}>CONTACT IS</p>
                <p className={`${popins.className} text-white text-[1rem]`}>Свяжитесь с нами!</p>
            </div>
            
            <Form />
            <FeedbackInfo />
            <YandexMap />
        </>
    );
}

export default ContactsPage;