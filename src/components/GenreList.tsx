import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../hooks/useGenre";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectedGenre, selectedGenre }: Props) {
  const { genres, isLoading, error } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return null;

  return (
    <>
      <Heading paddingY={2} as="h2">
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((id) => {
            return (
              <ListItem key={id} paddingY="0.4em">
                <GenreListSkeleton />
              </ListItem>
            );
          })}
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="0.4em">
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
