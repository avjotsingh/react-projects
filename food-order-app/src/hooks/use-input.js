import { useState } from "react";

const useInput = (validateFn) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateFn(enteredValue);
    const inputHasError = !isValid && isTouched;

    const changeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const blurHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid,
        hasError: inputHasError,
        reset,
        changeHandler,
        blurHandler
    }
}

export default useInput;