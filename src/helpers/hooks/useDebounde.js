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
        // ри изменении value или delay, useEffect сбрасывает и снова устанавливает setTimeout, обновляя debouncedValue.
    }, [value, delay]);
    // возвращает текущее задержанное значение, к
    return debouncedValue;
}