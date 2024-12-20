import { Group, Image, Title } from "@mantine/core";
import logo from "../assets/logo.webp";
import ColorActionSwitch from "./ColorActionSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Group w="100%" justify="space-between">
      <Image src={logo} w="40px" h="40px" />
      <Title visibleFrom="sm" order={2}>
        Game Radar
      </Title>
      <SearchInput onSearch={onSearch} />
      <ColorActionSwitch />
    </Group>
  );
};

export default NavBar;
