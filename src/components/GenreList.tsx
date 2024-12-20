import { Group, Image, List, Text } from "@mantine/core";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List listStyleType="none">
      {data.map((genre) => (
        <List.Item key={genre.id} my={2}>
          <Group>
            <Image
              h="32px"
              w="32px"
              radius={16}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Text size="lg">{genre.name}</Text>
          </Group>
        </List.Item>
      ))}
    </List>
  );
};

export default GenreList;
