import { useState } from 'react';

function useLocalStorage(key:string, initialValue: number) {
    const [value, setValue] = useState(() => {
        const savedValue = JSON.parse(localStorage.getItem(key)!);
        if (savedValue == null) {
            localStorage.setItem(key, JSON.stringify(initialValue))
            return initialValue
        }
        return savedValue
    })

    const setValueLocalStorage = (newValue:number) => {
        localStorage.setItem(key, JSON.stringify(newValue))
        setValue(newValue)
    }
    return [value, setValueLocalStorage]
}