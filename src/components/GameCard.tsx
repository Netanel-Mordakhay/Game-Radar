import { Game } from "../hooks/useGames";
import {
  Box,
  BackgroundImage,
  Title,
  Stack,
  useComputedColorScheme,
  Group,
} from "@mantine/core";
import cx from "clsx";
import classes from "../styles/GameCard.module.css";
import PlatformIconlist from "./PlatformIconlist";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <BackgroundImage
      src={game.background_image}
      radius="md"
      className={cx(
        classes.backgroundBox,
        computedColorScheme === "light"
          ? classes.lightBackground
          : classes.darkBackground
      )}
    >
      <Stack justify="space-between" h="100%">
        <Box h={160} p="10px"></Box>
        <Box
          className={cx(
            classes.cardBox,
            computedColorScheme === "light" ? classes.lightBox : classes.darkBox
          )}
        >
          <Title order={3}>{game.name}</Title>
          <Group justify="space-between">
            <PlatformIconlist
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <CriticScore score={game.metacritic} />
          </Group>
        </Box>
      </Stack>
    </BackgroundImage>
  );
};

export default GameCard;
