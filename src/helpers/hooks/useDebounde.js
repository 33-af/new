import { useEffect, useState } from "react"



// используется для задержки обновления значения на определённый период времени
// value (значение, которое нужно задержать) и delay (задержка в миллисекундах).
export const useDebounce = (value, delay)=> {
    const [debouncedValue, setDebouncedVaue] = useState(value);

    useEffect(()=> {
        // Он запускает setTimeout, который устанавливает новое значение debouncedValue через время delay.
        const handler = setTimeout(()=> {
            setDebouncedVaue(value);
        }, delay)

        return()=> {
            clearTimeout(handler);
        };
        // Если value или delay изменяются, эффект сбрасывается и запускается заново
    }, [value, delay]);
    // возвращает текущее задержанное значение, к
    return debouncedValue;
}