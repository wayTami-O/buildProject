import SocialComponent from "./SocialComponent";

function SocialBlock() {
    return (
        <div className="w-[19.75rem] h-[2.438rem] px-[0.938rem] flex justify-between items-center absolute top-[20.688rem] left-1/2 transform -translate-x-1/2 bg-white71 rounded-[1.063rem]">
            <SocialComponent imgSrc="/vk.svg" socialName="Вконтакте" />
            <SocialComponent imgSrc="/tg.svg" socialName="Телеграмм" />
            <SocialComponent imgSrc="/WhatsApp.svg" socialName="Ватцап" />
        </div>
    );
}

export default SocialBlock;