import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid, Text } from "@mantine/core";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Text>Loading</Text>;

  if (error) throw error;

  return (
    <SimpleGrid cols={{ base: 1, md: 2 }}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
