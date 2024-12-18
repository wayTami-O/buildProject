import { inter } from "@/styles/fonts";

function PolicityBlock() {
    return (
        <>
            <div className="flex flex-col gap-[3.125rem] pb-[4.375rem] px-[0.875rem] pt-[3.125rem] bg-dark">
                <div>
                    <p className={`${inter.className} text-white text-[1.25rem]`}>1. Сбор информации</p>
                    <p className={`${inter.className} text-[#BDBDBD] text-[0.625rem]`}>Мы можем собирать следующую информацию о вас:
                        <br />
                        • Личные данные: имя, фамилия, адрес электронной почты, номер телефона и другие контактные данные, которые вы предоставляете при заполнении форм на нашем сайте.  
                        <br />
                        • Информация о проектах: детали ваших строительных проектов, которые вы можете предоставить нам.  
                        <br />
                        • Данные о посещениях: информация о вашем взаимодействии с нашим сайтом, включая IP-адрес, тип браузера и время доступа.
                    </p>
                </div>
                <div>
                    <p className={`${inter.className} text-white text-[1.25rem]`}>1. Сбор информации</p>
                    <p className={`${inter.className} text-[#BDBDBD] text-[0.625rem]`}>
                    Мы используем собранную информацию для следующих целей: 
                    <br />
                    • Обработка запросов и предоставление услуг. 
                    <br />
                    • Связь с вами по вопросам ваших проектов. 
                    <br />
                    • Отправка новостей, обновлений и информации о наших услугах. 
                    <br />
                    • Улучшение нашего сайта и услуг на основе ваших отзывов. 
                    </p>
                </div>
                <div>
                    <p className={`${inter.className} text-white text-[1.25rem]`}>3. Передача информации  </p>
                    <p className={`${inter.className} text-[#BDBDBD] text-[0.625rem]`}>Мы не передаем вашу личную информацию третьим лицам без вашего согласия, за исключением случаев, когда это необходимо для выполнения услуг (например, подрядчики или поставщики) или если это требуется законом. </p>
                </div>
                <div>
                    <p className={`${inter.className} text-white text-[1.25rem]`}>4. Защита информации  </p>
                    <p className={`${inter.className} text-[#BDBDBD] text-[0.625rem]`}>Мы принимаем разумные меры для защиты вашей личной информации от несанкционированного доступа, использования или раскрытия. Мы используем современные технологии и процедуры безопасности для защиты данных.  </p>
                </div>
                <div>
                    <p className={`${inter.className} text-white text-[1.25rem]`}>5. Права пользователей  </p>
                    <p className={`${inter.className} text-[#BDBDBD] text-[0.625rem]`}>
                        Вы имеете право: 
                        <br />
                        • Запрашивать доступ к своей личной информации.  
                        <br />
                        • Исправлять неточную или неполную информацию.  
                        <br />
                        • Запрашивать удаление своих данных (при определенных условиях).  Чтобы реализовать свои права, пожалуйста, свяжитесь с нами по контактной информации ниже.  
                    </p>
                </div>
                <div>
                    <p className={`${inter.className} text-white text-[1.25rem]`}>6. Cookies  </p>
                    <p className={`${inter.className} text-[#BDBDBD] text-[0.625rem]`}>Наш сайт использует файлы cookies для улучшения пользовательского опыта. Cookies – это небольшие текстовые файлы, которые сохраняются на вашем устройстве. Вы можете управлять настройками cookies через настройки вашего браузера. </p>
                </div>
                <div>
                    <p className={`${inter.className} text-white text-[1.25rem]`}>7. Изменения в политике</p>
                    <p className={`${inter.className} text-[#BDBDBD] text-[0.625rem]`}>Мы оставляем за собой право вносить изменения в настоящую политику конфиденциальности. Все изменения будут опубликованы на этой странице с указанием даты вступления в силу. Рекомендуем периодически проверять эту страницу на предмет обновлений.  </p>
                </div>
            </div>
        </>
    );
}

export default PolicityBlock;