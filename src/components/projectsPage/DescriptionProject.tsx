import { inter, popins } from "@/styles/fonts";

interface DescriptionConstructor {
    title: string,
    desc: string,
    listInfo: string[],
}

function DescriptionProject({ title, desc, listInfo }: DescriptionConstructor) {
    return (
        <>
            <div className="pt-[3.563rem] px-[0.938rem] bg-dark">
                <div className="flex flex-col gap-[2.688rem] items-center border-[0.063rem] border-yellow49 pt-[2.188rem] pb-[2.688rem]">
                    <div className="flex flex-col items-center gap-[0.813rem]">
                        <p className={`${popins.className} text-center text-[1.5rem] text-yellowText`}>{title}</p>
                        <p className={`${inter.className} w-[19.813rem] text-[1rem] text-center text-white`}>{desc}</p>
                    </div>
                    <ul className="pl-[3rem] pr-[1.844rem] list-disc">
                        {
                            listInfo.map((el, index) => {
                                return <li key={index} className={`${inter.className} text-[1rem] text-white`}>{el}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default DescriptionProject;
