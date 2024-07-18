import { useState } from "react";

export const useFilters = (initialState) => {
    // key(имя фильтра) и a value(новое значение для фильтра).
    const [filters, setFilters] = useState(initialState);

    const changeFilter = (key, value) => {

        // тоесть возвращает новый обьект на основе старого тольок с измением где произошло и будет как пара- ключ значение?

       // Update the filter state
        setFilters((prev) => {
            // (prev) => {...}, где prev представляет предыдущее состояние filters.
            return {...prev, [key] : value};
        })
    };
    // возвращает текущее  состояние  changeFilterфункцию чтобы их можно было использовать в компоненте.
    return {filters, changeFilter}
}