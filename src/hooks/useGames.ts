import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatform";

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

const useGames = (gameQuery: GameQuery | null) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        parent_platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sort?.value,
      },
    },
    [gameQuery]
  );

  return { games: data, error, isLoading };
};
export default useGames;
