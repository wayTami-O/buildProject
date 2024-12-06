import { inter } from "@/styles/fonts";

function Offers() {
    return (
        <>
            <div className="pt-[2.75rem] bg-dark">
                <div className="px-[2rem] py-[1.5rem] bg-[#131313] text-center">
                    <span className={`${inter.className} text-[0.938rem] text-[#FFC42399]`}>Мы предлагаем партнёрам-франчайзи следующие преимущества:</span>
                    <p className={`${inter.className} text-center text-[0.938rem] text-white`}>- Полную поддержку на всех этапах запуска и ведения бизнеса. <br />- Обучение персонала всем нюансам и тонкостям ремонта и строительства.<br />- Программное обеспечение для автоматизации и производительности.<br />- Помощь в выборе места для офиса и его обустройстве.<br />- Предоставление готовых дизайнерских решений для проектов разного уровня сложности.<br />- Возможность получения скидок на приобретение стройматериалов от проверенных и надежных поставщиков.<br />- Рекламную поддержку и продвижение вашего бизнеса в социальных сетях.<br />- Выплату роялти только после того, как ваш бизнес начнёт приносить прибыль.</p>
                </div>
            </div>
        </>
    );
}

export default Offers;