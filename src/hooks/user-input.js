import {useState} from 'react';

const useInput = (validationfun) =>{
    const [enteredValue,setEnteredValue] = useState('');
    const [isvalidInputTouched,setIsValidInputTouched] = useState(false);
    const isValidInput = validationfun(enteredValue);
    const hasError = !isValidInput && isvalidInputTouched;

    const enteredValueHandler = (event) =>{
        setEnteredValue(event.target.value);
    }
    const enteredBlurHandler = (event) =>{
        event.preventDefault();
        setIsValidInputTouched(true);
    }
    const reset = () =>{
        setEnteredValue('');
        setIsValidInputTouched(false);

    }
    return {
        value:enteredValue,
        isValidInput,
        hasError,
        enteredBlurHandler,
        enteredValueHandler,
        reset
    }
}

export default useInput;