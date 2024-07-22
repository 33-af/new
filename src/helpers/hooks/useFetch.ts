// useFetch.js
import { useEffect, useState } from "react";


interface FetchFunction<P, T>{
  (params?:P) : Promise<T>
}

interface UseFetchResult<T>{
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T, P>(fetchFunction: FetchFunction<P, T>, params?:P): UseFetchResult<T>=> {

  const [data, setData] = useState <T | null> (null);
  const [isLoading, setIsLoading] = useState <boolean> (true);
  const [error, setError] = useState <Error | null> (null);

  // Строка параметров, используемая в зависимости для useEffect для отслеживания изменений параметров.
  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunction(params);
        setData(result);
      } catch (error) {
        setError(error as Error);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, stringParams]);

  return { data, isLoading, error };
};