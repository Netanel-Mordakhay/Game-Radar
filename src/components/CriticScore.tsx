import { Badge } from "@mantine/core";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  // No metacritic score available
  if (!score) return null;

  // Return metacritic score badge based on score
  let color =
    score > 85 ? "green" : score > 75 ? "lime" : score > 60 ? "yellow" : "red";
  return <Badge color={color}>{score}</Badge>;
};

export default CriticScore;
