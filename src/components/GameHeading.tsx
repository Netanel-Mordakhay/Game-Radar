import { Title } from "@mantine/core";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const currentTitle = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <Title order={2}>{currentTitle}</Title>;
};

export default GameHeading;
