import { Group, Image, Text } from "@mantine/core";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <Group align="center">
      <Image src={logo} w="40px" h="40px" />
      <Text>Game-Radar</Text>
    </Group>
  );
};

export default NavBar;
