import { AppShell, Group, Burger, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";

const Layout = () => {
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
      withBorder={true}
    >
      <AppShell.Header>
        <Group h="100%" p="10px" wrap="nowrap">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <NavBar />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" withBorder>
        <ScrollArea type="never">
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          <SideMenu />
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
