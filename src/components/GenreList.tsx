import { Button, Group, Image, List, Stack, Title } from "@mantine/core";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import NavBarItemSkeleton from "./NavBarItemSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
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
        <>
          <Title order={4} size={24} mb={5}>
            Generes
          </Title>
          <List listStyleType="none">
            {data?.results.map((genre) => (
              <List.Item key={genre.id} my={2}>
                <Button
                  size="md"
                  variant={genre.id === selectedGenre?.id ? "light" : "subtle"}
                  //variant="subtle"
                  color="gray"
                  onClick={() => onSelectedGenre(genre)}
                >
                  <Group>
                    <Image
                      h="32px"
                      w="32px"
                      radius={16}
                      src={getCroppedImageURL(genre.image_background)}
                      //src={genre.image_background}
                      fit="cover"
                    />{" "}
                    {genre.name}
                  </Group>
                </Button>
              </List.Item>
            ))}
          </List>
        </>
      )}
    </>
  );
};

export default GenreList;
