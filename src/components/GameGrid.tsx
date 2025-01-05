import { Button, SimpleGrid, Text } from "@mantine/core";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error.message}</Text>}
      {isLoading ? (
        <SimpleGrid cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={25}>
          {skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton} />
          ))}
        </SimpleGrid>
      ) : (
        <>
          <SimpleGrid cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={25}>
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
          {hasNextPage && (
            <Button onClick={() => fetchNextPage()}>
              {isFetchingNextPage ? "Loading..." : "Show more"}
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default GameGrid;
