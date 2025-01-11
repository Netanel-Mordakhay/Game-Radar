import usePlatforms from "../../hooks/usePlatforms";
import { useNavigate, useLocation } from "react-router-dom";
import useGameQueryStore from "../../store";
import { Button, Group, List, Spoiler, Stack, Title } from "@mantine/core";
import NavBarItemSkeleton from "../NavBarItemSkeleton";
import iconMap from "../../data/icon-map";

const PlatformList = () => {
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
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
            Platforms
          </Title>
          <List listStyleType="none">
            {data?.results.map((platform) => {
              const Icon = iconMap[platform.slug];
              return (
                <List.Item key={platform.id} my={2}>
                  <Button
                    size="md"
                    variant={
                      platform.id === selectedPlatformId ? "light" : "subtle"
                    }
                    color="gray"
                    onClick={() => {
                      setSelectedPlatformId(platform.id);
                      location.pathname !== "/" && navigate("/");
                    }}
                  >
                    <Group>
                      {Icon && <Icon size={24} />}
                      {platform.name}
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

export default PlatformList;
