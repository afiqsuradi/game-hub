import useData from "./useData";

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

interface Error {
  message: string;
}

const useGames = () => {
  const { data, error, isLoading } = useData<Game>("/games");

  return { games: data, error, isLoading };
};
export default useGames;
