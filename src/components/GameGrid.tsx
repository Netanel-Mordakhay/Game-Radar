import { Loader, SimpleGrid, Text } from "@mantine/core";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

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
          <InfiniteScroll
            dataLength={fetchedGamesCount}
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Loader />}
            style={{ overflow: "visible" }}
          >
            <SimpleGrid cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={25}>
              {data?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.results.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </React.Fragment>
              ))}
            </SimpleGrid>
          </InfiniteScroll>
        </>
      )}
    </>
  );
};

export default GameGrid;
