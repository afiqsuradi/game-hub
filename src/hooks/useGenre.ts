import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreRespond {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenreRespond>("/genres", { signal: controller.signal })
      .then((response) => {
        setIsLoading(false);
        setGenres(response.data.results);
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenre;
