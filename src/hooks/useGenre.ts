import useData from "./useData";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  const { data, error, isLoading } = useData<Genre>("/genres");
  return { genres: data, error, isLoading };
};

export default useGenre;
