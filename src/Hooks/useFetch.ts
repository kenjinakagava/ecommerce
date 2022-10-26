import { useState, useEffect } from "react";

type Response = {
  id?: number;
  title?: string;
  image?: string;
  shortDescription?: string;
  description?: string;
  price?: number;
};

const useFetch = (url: string) => {
  const [data, setData] = useState<Array<Response> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("placeholder");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
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

// to make this hook reusable lets make it take an interface prop later
