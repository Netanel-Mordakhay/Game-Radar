import { Game } from "../hooks/useGames";
import {
  Box,
  BackgroundImage,
  Title,
  Stack,
  useComputedColorScheme,
  Group,
  List,
  Divider,
} from "@mantine/core";
import cx from "clsx";
import classes from "../styles/GameCard.module.css";
import PlatformIconlist from "./PlatformIconlist";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <BackgroundImage
      h={340}
      src={getCroppedImageURL(game.background_image)}
      radius="md"
      className={cx(
        classes.backgroundBox,
        computedColorScheme === "light"
          ? classes.lightBackground
          : classes.darkBackground
      )}
    >
      <Stack justify="space-between" h="100%">
        <Box p="10px">
          <Emoji rating={game.rating_top} />
        </Box>
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
          <Box className={classes.extraDetails}>
            <List listStyleType="none">
              <List.Item>Release date: 16/05/1996</List.Item>
              <Divider my={5} />
              <List.Item>Genres: RPG, Action, Adventure</List.Item>
              <Divider my={5} />
              <List.Item>Something else: text</List.Item>
            </List>
          </Box>
        </Box>
      </Stack>
    </BackgroundImage>
  );
};

export default GameCard;
