import useGames from "../hooks/useGames";
import { Grid, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gap={"2em"}
        padding={"2em"}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Grid>
      {/* <SimpleGrid column={3} spacing={6}>
      </SimpleGrid> */}
    </>
  );
}

export default GameGrid;
