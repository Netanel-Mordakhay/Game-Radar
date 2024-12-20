import { SimpleGrid, Text } from "@mantine/core";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading ? (
        <SimpleGrid cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={25}>
          {skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton} />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={25}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
