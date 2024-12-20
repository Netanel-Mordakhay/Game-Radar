import { Button, Group, Image, List, Stack } from "@mantine/core";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import NavBarItemSkeleton from "./NavBarItemSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
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
              <Button
                size="md"
                variant="subtle"
                color="gray"
                onClick={() => onSelectedGenre(genre)}
              >
                <Group>
                  <Image
                    h="32px"
                    w="32px"
                    radius={16}
                    src={getCroppedImageURL(genre.image_background)}
                  />{" "}
                  {genre.name}
                </Group>
              </Button>
            </List.Item>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
