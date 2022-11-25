import { useState, useEffect } from "react";

// Generic Typing for reusability
const useFetch = <T>(url: string) => {
  const [apiRes, setApiRes] = useState<T[] | null>(null);
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
        setApiRes(data);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [url]);

  return {
    apiRes,
    isLoading,
    error,
  };
};

export default useFetch;
