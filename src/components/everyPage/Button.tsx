'use client'

interface buttonConstructor { 
    text: string,
    functional?: () => void | null,
    submit?: boolean
}

function ButtonYellow(el: buttonConstructor) {
    return (
        <>
            {
                el.submit ?
                    <button type="submit" className="w-[18.563rem] h-[2.688rem] bg-yellow70 rounded-[0.625rem] text-white" onClick={el.functional}>{el.text}</button>
                :   <button type="button" className="w-[18.563rem] h-[2.688rem] bg-yellow70 rounded-[0.625rem] text-white" onClick={el.functional}>{el.text}</button>
            }
        </>
    );
}



export default ButtonYellow;