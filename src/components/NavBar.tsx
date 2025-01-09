import { Group, Image, Title } from "@mantine/core";
import logo from "../assets/logo.webp";
import ColorActionSwitch from "./ColorActionSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <Group w="100%" justify="space-between">
      <Image src={logo} w="40px" h="40px" />
      <Title visibleFrom="sm" order={2}>
        Game Radar
      </Title>
      <SearchInput />
      <ColorActionSwitch />
    </Group>
  );
};

export default NavBar;
