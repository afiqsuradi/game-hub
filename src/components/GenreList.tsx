import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

function GenreList() {
  const { genres, isLoading, error } = useGenre();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="0.4em">
          <HStack>
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
