'use client'

import { popins } from "@/styles/fonts";
import React, { useState } from "react";

type InputPlaceholder = {
    placeholder: string;
    size: "small" | "big",
    id: string,
    value: string,
    onChangeProps: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlurProps: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function CustomInput(props: InputPlaceholder) {
    
    const [valuePlaceholder, setValuePlaceholder] = useState<boolean>(true)
    const [textInput, setTextInput] = useState<string>('')

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setTextInput(inputValue)
        setValuePlaceholder(inputValue === "")
    }

    return (
        <>
            <div className={`${props.size == "small" ? `w-[10.5rem]` : 'w-full'} flex relative h-[2.5rem] py-[0.531rem] px-[0.688rem] border-yellow53 border-[0.063rem] rounded-[0.313rem] bg-gray23`}>
                <input 
                    type="text"
                    id={props.id}
                    className="relative z-20 w-full bg-transparent text-white"
                    value={textInput || props.value}
                    onInput={handleInput}
                    onBlur={props.onBlurProps}
                    onChange={props.onChangeProps}
                />
                {
                    valuePlaceholder && <span className={`${popins.className} absolute z-10 top-[0.66rem] left-[0.688rem] text-gray9E`}>{props.placeholder} <span className="text-red">*</span></span>
                }
            </div>  
        </>
    );
}

export default CustomInput;