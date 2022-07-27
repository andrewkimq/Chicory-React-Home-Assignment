import { useState } from "react";

export default function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem(key)!);
    if (savedValue == null) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
    return savedValue;
  });

  const setValueLocalStorage = (newValue: string) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };
  return [value, setValueLocalStorage];
}
