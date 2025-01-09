import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Loader, Title, Text, Spoiler } from "@mantine/core";

const GameDeatilsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Loader />;

  if (error || !game) throw error;

  return (
    <>
      <Title>{game.name}</Title>
      <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
        <Text>{game.description_raw}</Text>
      </Spoiler>
    </>
  );
};

export default GameDeatilsPage;
