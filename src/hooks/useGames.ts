import useData from "./useData";
import { Genre } from "./useGenre";
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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

  return { games: data, error, isLoading };
};
export default useGames;
