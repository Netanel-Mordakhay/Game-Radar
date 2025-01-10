import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Loader,
  Title,
  Text,
  Spoiler,
  Box,
  useComputedColorScheme,
  Badge,
  Image,
  SimpleGrid,
  Stack,
} from "@mantine/core";
import cx from "clsx";
import classes from "../styles/GameDetailsPage.module.css";
import getImageURL from "../services/image-full-url";
import GameTrailer from "../components/GameDetails/GameTrailer";
import PlatformIconlist from "../components/PlatformIconlist";
import GameScreenshots from "../components/GameDetails/GameScreenshots";
import getCroppedImageURL from "../services/image-url";

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
        <SimpleGrid cols={{ sm: 1, md: 2 }}>
          <Box>
            <Stack>
              <PlatformIconlist
                platforms={game.parent_platforms.map(
                  (platform) => platform.platform
                )}
              />
              <Image
                src={getCroppedImageURL(game.background_image)}
                maw={350}
                radius="md"
              />
              <Title textWrap="pretty">{game.name}</Title>
              <Badge mr={5}>Release date: {game.released}</Badge>
              <Badge mx={5}>Average playtime: {game.playtime}</Badge>
              <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                <Text>{game.description_raw}</Text>
              </Spoiler>
              <SimpleGrid cols={2}>
                <Text>Platforms:</Text>
                <Text>Platforms:</Text>
                <Text>Platforms:</Text>
                <Text>Platforms:</Text>
              </SimpleGrid>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <GameTrailer gameId={game.id} />
              <GameScreenshots gameId={game.id} />
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default GameDeatilsPage;
