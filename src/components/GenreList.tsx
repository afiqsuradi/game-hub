import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import GenreListSkeleton from "./GenreListSkeleton";

function GenreList() {
  const { genres, isLoading, error } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return null;

  return (
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
            <Button variant="link" fontSize="lg">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
