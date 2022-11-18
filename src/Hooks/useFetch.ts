import { useState, useEffect } from "react";
import { ProductsAPIResponse } from "../Interface";

const useFetch = (url: string) => {
  const [data, setData] = useState<Array<ProductsAPIResponse> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("There may be a problem with the api.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
