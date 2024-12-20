import { Group, Image, List, Skeleton, Stack, Text } from "@mantine/core";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import NavBarItemSkeleton from "./NavBarItemSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4];

  if (error) return null;

  return (
    <>
      {isLoading ? (
        <Stack>
          {skeletons.map((skeleton) => (
            <NavBarItemSkeleton key={skeleton} />
          ))}
        </Stack>
      ) : (
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
      )}
    </>
  );
};

export default GenreList;
