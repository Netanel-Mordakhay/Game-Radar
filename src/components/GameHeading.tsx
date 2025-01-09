import { Title } from "@mantine/core";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const currentTitle = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Title order={2}>{currentTitle}</Title>;
};

export default GameHeading;
