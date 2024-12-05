export interface smetaConstructor {
    title: string
}

function Smeta({title}: smetaConstructor) {
    return (
        <div className="flex gap-[1.313rem] items-center">
            <div className="w-[14rem] h-[4.063rem] flex justify-center items-center border-[0.063rem] border-yellow">
                <p>Смета для Зал</p>
            </div>
        </div>
    )
}

export default Smeta;