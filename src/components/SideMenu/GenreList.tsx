import { Button, Group, List, Spoiler, Stack, Title } from "@mantine/core";
import useGenres from "../../hooks/useGenres";
import NavBarItemSkeleton from "../NavBarItemSkeleton";
import useGameQueryStore from "../../store";
import { useLocation, useNavigate } from "react-router-dom";
import iconMap from "../../data/icon-map";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const navigate = useNavigate();
  const location = useLocation();
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
        <Spoiler maxHeight={220} showLabel="Show more" hideLabel="Hide">
          <Title order={4} size={24} mb={5}>
            Generes
          </Title>
          <List listStyleType="none">
            {data?.results.map((genre) => {
              const Icon = iconMap[genre.slug];
              return (
                <List.Item key={genre.id} my={2}>
                  <Button
                    size="md"
                    variant={genre.id === selectedGenreId ? "light" : "subtle"}
                    color="gray"
                    onClick={() => {
                      setSelectedGenreId(genre.id);
                      location.pathname !== "/" && navigate("/");
                    }}
                  >
                    <Group>
                      {Icon && <Icon size={24} />}
                      {genre.name}
                    </Group>
                  </Button>
                </List.Item>
              );
            })}
          </List>
        </Spoiler>
      )}
    </>
  );
};

export default GenreList;
