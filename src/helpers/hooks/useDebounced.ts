// useDebounce.js
import { useEffect, useState } from "react";

// Используется для задержки обновления значения на определённый период времени
// value (значение, которое нужно задержать) и delay (задержка в миллисекундах).
export const useDebounced = (value: string, delay: number) => {
  //jeneric
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Он запускает setTimeout, который устанавливает новое значение debouncedValue через время delay.
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
    // При изменении value или delay, useEffect сбрасывает и снова устанавливает setTimeout, обновляя debouncedValue.
  }, [value, delay]);

  // Возвращает текущее задержанное значение
  return debouncedValue;
};
