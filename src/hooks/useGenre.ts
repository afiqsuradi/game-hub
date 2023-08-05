import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

const useGenre = () => {
  const { data, error, isLoading } = useData<Genre>("/genres");
  return { genres: data, error, isLoading };
};

export default useGenre;