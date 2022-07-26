import { useState, useEffect } from "react";

export default function useFetchRetailers(url: URL) {
  const [retailerResponse, setRetailerResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect((): void => {
    const callFetch = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const newRetailerResponse = await response.json();
        setRetailerResponse(newRetailerResponse);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) {
          message = error.message;
        }
        reportError({ message });
        setRetailerResponse(null);
      }
      setIsLoading(false);
    };
    callFetch();
  }, [url]);

  return [retailerResponse, isLoading];
}
