import { Stack } from "@mantine/core";
import GenreList from "./GenreList";
import PlatformList from "./PlatformList";
import TopMenu from "./TopMenu";

const SideMenu = () => {
  return (
    <Stack>
      <TopMenu />
      <GenreList />
      <PlatformList />
    </Stack>
  );
};

export default SideMenu;
