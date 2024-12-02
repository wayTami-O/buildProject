import { inter } from "@/styles/fonts";
import ButtonYellow from "../everyPage/Button";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useFormik } from "formik";
import { z } from "zod";

const Schema = z.object({
    room: z.string().min(1, 'Название комнаты обязательно').max(50, 'Название слишком длинное'),
    walls: z.string().min(1, 'Заполните поле стены'),
    ceiling: z.string().min(1, 'Заполните поле потолок'),
    floor: z.string().min(1, 'Заполните поле пол'),
    plumbing: z.string().min(1, 'Заполните поле сантехника'),
    powerSupply: z.string().min(1, 'Заполните поле электроснабжение'),
    roomExamples: z.string().regex(/^\d+(\.\d+)?$/, 'Укажите число в метрах'),
    roomHeight: z.string().regex(/^\d+(\.\d+)?$/, 'Укажите число в метрах'),
    square: z.string().regex(/^\d+(\.\d+)?$/, 'Укажите площадь комнаты в метрах'),
    sockets: z.string().regex(/^\d+$/, 'Укажите количество розеток в виде числа'),
    openingHeight: z.string().regex(/^\d+(\.\d+)?$/, 'Укажите высоту проёма в метрах'),
    openingWidth: z.string().regex(/^\d+(\.\d+)?$/, 'Укажите ширину проёма в метрах'),
});

function Form() {

    const formik = useFormik({
        initialValues: {
            room: '',
            walls: '',
            ceiling: '',
            floor: '',
            plumbing: '',
            powerSupply: '',
            roomExamples: '',
            roomHeight: '',
            square: '',
            sockets: '',
            openingHeight: '',
            openingWidth: '',
        },
        validationSchema: toFormikValidationSchema(Schema),
        onSubmit: (values) => {
            console.log('Форма отправлена:', values);
        },
    });

    return (
        <div className="pt-[1.75rem] pb-[5.25rem] px-[1.25rem] bg-dark">
            <form className="flex flex-col items-center gap-[1.75rem]">
                <fieldset className="w-full flex flex-col gap-[0.688rem]">
                    <label className={`${inter.className} w-full text-[0.875rem] text-white`} htmlFor="room">Название комнаты</label>
                    <input 
                        id="room"
                        placeholder="Например: зал"
                        className="py-[0.688rem] px-[0.563rem] bg-gray23 text-white rounded-[0.563rem] border-[0.063rem]"
                        type="text" />
                </fieldset>
                <fieldset className="w-full flex flex-col gap-[0.688rem]">
                    <label className={`${inter.className} w-full text-[0.875rem] text-white`} htmlFor="walls">Стены</label>
                    <input 
                        id="walls"
                        placeholder="- - - - "
                        className="py-[0.688rem] px-[0.563rem] bg-gray23 text-white rounded-[0.563rem] border-[0.063rem]"
                        type="text" />
                </fieldset>
                <fieldset className="w-full flex flex-col gap-[0.688rem]">
                    <label className={`${inter.className} w-full text-[0.875rem] text-white`} htmlFor="ceiling">Потолок</label>
                    <input 
                        id="ceiling"
                        placeholder="- - - - "
                        className="py-[0.688rem] px-[0.563rem] bg-gray23 text-white rounded-[0.563rem] border-[0.063rem]"
                        type="text" />
                </fieldset>
                <fieldset className="w-full flex flex-col gap-[0.688rem]">
                    <label className={`${inter.className} w-full text-[0.875rem] text-white`} htmlFor="floor">Пол</label>
                    <input 
                        id="floor"
                        placeholder="- - - - "
                        className="py-[0.688rem] px-[0.563rem] bg-gray23 text-white rounded-[0.563rem] border-[0.063rem]"
                        type="text" />
                </fieldset>
                <fieldset className="w-full flex flex-col gap-[0.688rem]">
                    <label className={`${inter.className} w-full text-[0.875rem] text-white`} htmlFor="plumbing">Сантехника</label>
                    <input 
                        id="plumbing"
                        placeholder="- - - - "
                        className="py-[0.688rem] px-[0.563rem] bg-gray23 text-white rounded-[0.563rem] border-[0.063rem]"
                        type="text" />
                </fieldset>
                <fieldset className="w-full flex flex-col gap-[0.688rem]">
                    <label className={`${inter.className} w-full text-[0.875rem] text-white`} htmlFor="powerSupply">Электроснабжение:</label>
                    <input 
                        id="powerSupply"
                        placeholder="- - - - "
                        className="py-[0.688rem] px-[0.563rem] bg-gray23 text-white rounded-[0.563rem] border-[0.063rem]"
                        type="text" />
                </fieldset>
                <div className="w-full h-[4.438rem] bg-gray23 mt-[2.5rem] border-[0.063rem] flex items-center justify-center rounded-[0.313rem] border-white/[72]">
                    <p className={`${inter.className} text-[0.938rem] w-[17.688rem] text-white text-center`}>Укажите размеры комнаты и остальные необходимые параметры</p>
                </div>
                <fieldset className="w-full flex flex-col gap-[0.688rem]">
                    <label className={`${inter.className} w-full text-[0.875rem] text-white`} htmlFor="roomExamples">Периметр комнаты м.:</label>
                    <input 
                        id="roomExamples"
                        placeholder="- - - - "
                        className="py-[0.688rem] px-[0.563rem] bg-gray23 text-white rounded-[0.563rem] border-[0.063rem]"
                        type="text" />
                </fieldset>
                <fieldset className="w-full flex flex-col gap-[0.688rem]">
                    <label className={`${inter.className} w-full text-[0.875rem] text-white`} htmlFor="roomHeight">Высота комнаты м.</label>
                    <input 
                        id="roomHeight"
                        placeholder="- - - - "
                        className="py-[0.688rem] px-[0.563rem] bg-gray23 text-white rounded-[0.563rem] border-[0.063rem]"
                        type="text" />
                </fieldset>
                <fieldset className="w-full flex flex-col gap-[0.688rem]">
                    <label className={`${inter.className} w-full text-[0.875rem] text-white`} htmlFor="square">Площадь комнаты м2:</label>
                    <input 
                        id="square"
                        placeholder="- - - - "
                        className="py-[0.688rem] px-[0.563rem] bg-gray23 text-white rounded-[0.563rem] border-[0.063rem]"
                        type="text" />
                </fieldset>
                <fieldset className="w-full flex flex-col gap-[0.688rem]">
                    <label className={`${inter.className} w-full text-[0.875rem] text-white`} htmlFor="sockets">Количество необходимых розеток и выключателей шт.</label>
                    <input 
                        id="sockets"
                        placeholder="- - - - "
                        className="py-[0.688rem] px-[0.563rem] bg-gray23 text-white rounded-[0.563rem] border-[0.063rem]"
                        type="text" />
                </fieldset>
                <fieldset className="w-full flex flex-col gap-[0.688rem]">
                    <label className={`${inter.className} w-full text-[0.875rem] text-white`} htmlFor="openingHeight">Высота проёма м. (Окно, дверь, арка.):</label>
                    <input 
                        id="openingHeight"
                        placeholder="- - - - "
                        className="py-[0.688rem] px-[0.563rem] bg-gray23 text-white rounded-[0.563rem] border-[0.063rem]"
                        type="text" />
                </fieldset>
                <fieldset className="w-full flex flex-col gap-[0.688rem]">
                    <label className={`${inter.className} w-full text-[0.875rem] text-white`} htmlFor="openingWidth">Ширина проёма м.</label>
                    <input 
                        id="openingWidth"
                        placeholder="- - - - "
                        className="py-[0.688rem] px-[0.563rem] bg-gray23 text-white rounded-[0.563rem] border-[0.063rem]"
                        type="text" />
                </fieldset>
                <ButtonYellow text="Добавить еще один проем" />
                <ButtonYellow text="Удалить один проем" />
                <ButtonYellow text="Рассчитать" submit />
            </form>
        </div>
    );
}

export default Form;