// useFilters.js
import { useState } from "react";
import { IFilters } from "../../interfaces";

export const useFilters = (initialState: IFilters) => {
  // Key (имя фильтра) и value (новое значение для фильтра).
  const [filters, setFilters] = useState(initialState);

  const changeFilter = (key: string, value: string | number | null)=> {
    // Обновляет состояние фильтра
    setFilters((prev) => {
      // (prev) => {...}, где prev представляет предыдущее состояние filters.
      return { ...prev, [key]: value };
    });
  };

  // Возвращает текущее состояние и changeFilter функцию, чтобы их можно было использовать в компоненте.
  return { filters, changeFilter };
};
