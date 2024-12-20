import { Box, Button, Menu } from "@mantine/core";
import { BsChevronDown } from "react-icons/bs";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiAtari, SiSega, SiCommodore } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import usePlatfroms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatfroms();

  const iconMap: { [key: string]: IconType } = {
    // Mapping slug into icon name
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    atari: SiAtari,
    sega: SiSega,
    commodore: SiCommodore,
  };

  if (error) return null;

  return (
    <Box mb={15}>
      <Menu
        shadow="md"
        transitionProps={{ transition: "fade", duration: 150 }}
        position="top-start"
        withArrow
      >
        <Menu.Target>
          <Button
            size="md"
            color="gray"
            variant="gradient"
            rightSection={<BsChevronDown />}
          >
            Platforms
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {data.map((platform) => {
            const Icon = iconMap[platform.slug];
            return Icon ? (
              <Menu.Item
                key={platform.id}
                leftSection={<Icon key={platform.id} />}
              >
                {platform.name}
              </Menu.Item>
            ) : null;
          })}
          <Menu.Divider />
          <Menu.Item color="gray">Clear</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
