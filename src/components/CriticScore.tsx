import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      borderRadius="0.5em"
      paddingX={2}
      fontSize="14px"
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
