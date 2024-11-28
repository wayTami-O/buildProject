import Image from "next/image";

export type slideTeamType = {
    name: string,
    jobTitle: string,
    img: string,
    text: string
}

function SlideTeam(slideInfo: slideTeamType) {
    return (
    <>
        <div className="h-[27.563rem] w-[16.438rem] flex flex-col items-center pt-[1.25rem] gap-[0.938rem] border-[0.063rem] border-yellow rounded-[0.688rem]">
            <div className="flex flex-col items-center gap-[0.313rem]">
                <h2 className="text-white text-[1rem] bg-yellow rounded-[0.25rem] px-[0.563rem] py-[0.313rem]">{slideInfo.name}</h2>
                <p className="text-[0.688rem] text-white">{slideInfo.jobTitle}</p>
            </div>
            <Image 
                className="rounded-[0.25rem]"
                src={slideInfo.img}
                width={171}
                height={157}
                alt="worker"
            />
            <p className="w-[15.688rem] text-white text-[0.875rem] text-center">{slideInfo.text}</p>
        </div>
    </>
    );
}

export default SlideTeam;