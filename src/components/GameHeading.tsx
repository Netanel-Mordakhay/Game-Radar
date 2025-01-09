import { Title } from "@mantine/core";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const currentTitle = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Title order={2}>{currentTitle}</Title>;
};

export default GameHeading;
