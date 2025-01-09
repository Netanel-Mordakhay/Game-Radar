import { Group } from "@mantine/core";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
      <GameHeading />
      <Group>
        <PlatformSelector />
        <SortSelector />
      </Group>
      <GameGrid />
    </>
  );
};

export default HomePage;
