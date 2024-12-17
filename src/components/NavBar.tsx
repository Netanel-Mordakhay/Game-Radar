import { Group, Image, Text } from "@mantine/core";
import logo from "../assets/logo.webp";
import ColorActionSwitch from "./ColorActionSwitch";

const NavBar = () => {
  return (
    <Group>
      <Image src={logo} w="40px" h="40px" />
      <Text>asd</Text>
      <ColorActionSwitch />
    </Group>
  );
};

export default NavBar;
