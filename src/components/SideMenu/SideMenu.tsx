import { Stack, Text } from "@mantine/core";
import GenreList from "./GenreList";
import PlatformList from "./PlatformList";

const SideMenu = () => {
  return (
    <Stack>
      <GenreList />
      <PlatformList />
    </Stack>
  );
};

export default SideMenu;
