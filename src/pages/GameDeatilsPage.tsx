import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Loader,
  Title,
  Text,
  Spoiler,
  Box,
  useComputedColorScheme,
  Grid,
  Badge,
  Group,
} from "@mantine/core";
import cx from "clsx";
import classes from "../styles/GameDetailsPage.module.css";
import getImageURL from "../services/image-full-url";
import GameTrailer from "../components/GameTrailer";
import PlatformIconlist from "../components/PlatformIconlist";

const GameDeatilsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  if (isLoading) return <Loader />;

  if (error || !game) throw error;

  return (
    <>
      <Box
        className={cx(
          classes.backgroundContainer,
          computedColorScheme === "light" ? classes.light : classes.dark
        )}
        style={{
          backgroundImage: `url(${getImageURL(game.background_image)})`,
        }}
      />

      <Box className={classes.content}>
        <Grid columns={2}>
          <Grid.Col span={1}>
            <PlatformIconlist
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <Title>{game.name}</Title>
            <Badge mr={5} my={10}>
              Release date: {game.released}
            </Badge>
            <Badge mx={5} my={10}>
              Average playtime: {game.playtime}
            </Badge>
            <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
              <Text>{game.description_raw}</Text>
            </Spoiler>

            <Grid columns={2}>
              <Grid.Col span={1}>
                <Group>
                  <Text>Platforms:</Text>
                  {game.parent_platforms.map(
                    (platform) => platform.platform.name
                  )}
                </Group>
              </Grid.Col>
              <Grid.Col span={1}>col 2</Grid.Col>
              <Grid.Col span={1}>col 1</Grid.Col>
              <Grid.Col span={1}>col 2</Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={1}>
            <GameTrailer gameId={game.id} />
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
};

export default GameDeatilsPage;
