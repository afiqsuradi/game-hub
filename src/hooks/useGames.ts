import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

interface GameResponse {
  count: number;
  results: Game[];
}

interface Error {
  message: string;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<GameResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setIsLoading(false);
        setGames(response.data.results);
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};
export default useGames;
