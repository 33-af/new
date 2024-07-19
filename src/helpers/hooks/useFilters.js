// useFilters.js
import { useState } from "react";

export const useFilters = (initialState) => {
  // Key (имя фильтра) и value (новое значение для фильтра).
  const [filters, setFilters] = useState(initialState);

  const changeFilter = (key, value) => {
    // Обновляет состояние фильтра
    setFilters((prev) => {
      // (prev) => {...}, где prev представляет предыдущее состояние filters.
      return { ...prev, [key]: value };
    });
  };

  // Возвращает текущее состояние и changeFilter функцию, чтобы их можно было использовать в компоненте.
  return { filters, changeFilter };
};
