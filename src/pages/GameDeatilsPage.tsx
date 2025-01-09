import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Loader,
  Title,
  Text,
  Spoiler,
  Box,
  useComputedColorScheme,
} from "@mantine/core";
import cx from "clsx";
import classes from "../styles/GameDetailsPage.module.css";
import getImageURL from "../services/image-full-url";

const GameDeatilsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  if (isLoading) return <Loader />;

  if (error || !game) throw error;

  return (
    <Box
      className={cx(
        classes.backgroundContainer,
        computedColorScheme === "light" ? classes.light : classes.dark
      )}
      style={{
        backgroundImage: `url(${getImageURL(game.background_image)})`,
      }}
    >
      <Box className={classes.content}>
        <Title>{game.name}</Title>
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
          <Text>{game.description_raw}</Text>
          <Text>{game.description_raw}</Text>
        </Spoiler>
      </Box>
    </Box>
  );
};

export default GameDeatilsPage;
