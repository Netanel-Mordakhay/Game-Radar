import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid, Skeleton } from "@mantine/core";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) throw error;

  return (
    <>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        {isLoading
          ? skeletons.map((skeleton) => (
              <Skeleton key={skeleton} height={200} />
            ))
          : data?.results.map((file) => (
              <Image key={file.id} src={file.image} radius="md" />
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
