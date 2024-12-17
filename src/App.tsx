import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavBar from "./components/NavBar";
import ColorActionSwitch from "./components/ColorActionSwitch";

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
    >
      <AppShell.Header>
        <Group h="100%" p="10px">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <NavBar />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        Main
        <ColorActionSwitch />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
