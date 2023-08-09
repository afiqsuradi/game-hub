import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGridHeader = ({ gameQuery }: Props) => {
  const headers = [];
  gameQuery.platform?.name ? headers.push(gameQuery.platform?.name) : null;
  gameQuery.genre?.name ? headers.push(gameQuery.genre?.name) : null;
  return (
    <Heading paddingY={2} as={"h1"}>{`${headers.join(" ")} Games`}</Heading>
  );
};

export default GameGridHeader;
