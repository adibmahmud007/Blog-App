import { useState } from "react"

const useInputState= (defaultValue='')=>{
    const [inputValue,seInputValue]=useState(defaultValue);

    const handleChange=e=>{
        seInputValue(e.target.value);
    }

    return[inputValue,handleChange];
}

export default useInputState;