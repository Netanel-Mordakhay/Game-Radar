import { Game } from "../hooks/useGames";
import { Box, BackgroundImage, Title, Stack } from "@mantine/core";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <BackgroundImage src={game.background_image} radius="md">
      <Stack justify="space-between" h="100%">
        <Box h={160} />
        <Box
          style={{
            backdropFilter: "blur(4px)",
            //margin: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // FOR DARK
            //borderRadius: "8px",
            borderBottomRightRadius: "8px",
            borderBottomLeftRadius: "8px",
            padding: "10px",
            borderTop: "solid 1px rgba(255, 255, 255, 0.3)",
            borderTop: "solid 1px rgba(0, 0, 0, 0.7)", // FOR DARK
          }}
        >
          <Title order={5}>{game.name}</Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          aperiam vitae voluptatibus odio quidem quae.
        </Box>
      </Stack>
    </BackgroundImage>
  );
};

export default GameCard;
