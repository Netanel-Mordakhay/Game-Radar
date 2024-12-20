import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      withBorder={true}
    >
      <AppShell.Header>
        <Group h="100%" p="10px">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <NavBar />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <GenreList />
      </AppShell.Navbar>

      <AppShell.Main>
        <GameGrid />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
