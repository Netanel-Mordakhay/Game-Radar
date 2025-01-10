import { Group, Image, Title } from "@mantine/core";
import logo from "../assets/logo.webp";
import ColorActionSwitch from "./ColorActionSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Group w="100%" justify="space-between">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          gap: "8px",
        }}
      >
        <Image src={logo} w="40px" h="40px" />
        <Title visibleFrom="sm" order={2}>
          Game Radar
        </Title>
      </Link>
      <SearchInput />
      <ColorActionSwitch />
    </Group>
  );
};

export default NavBar;
