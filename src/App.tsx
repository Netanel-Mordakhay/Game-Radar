import { AppShell, Burger, Group, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import "./index.css";
import GameHeading from "./components/GameHeading";

function App() {
  //const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header>
        <Group h="100%" p="10px" wrap="nowrap">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <NavBar />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" withBorder>
        <ScrollArea>
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          <GenreList />
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>
        <GameHeading />
        <Group>
          <PlatformSelector />
          <SortSelector />
        </Group>
        <GameGrid />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
