import { useState } from "react";

export function useLocalStorage(key, value) {
    const [ v, setV ] = useState(function() {
        const initial = localStorage.getItem(key)
        return initial ? JSON.parse(initial) : value;
    });
    const setValueLS = function(value) {
        setV(value);
        localStorage.setItem(key, JSON.stringify(value));
    };
    return [v, setValueLS];
};